/**
 * Claude Code handoff for the final repair pass.
 *
 * Earlier the autosetup tail wrote `.cursor/autosetup-windows/*.json` and a
 * Cursor extension opened one agent chat per skill. The mechanical skills
 * (interactive-loader, services-obfuscation helpers, github-android-aab,
 * description, facebook) now run directly in JS during the tail, so the only
 * step that still needs an agent is the final import/export + phone-launch
 * repair (repair-imports, plus the Final-repair section of
 * services-obfuscation as a reference).
 *
 * This module prepares that handoff for Claude Code instead of Cursor:
 *  - copies the repair skills into the project `.claude/skills/` (from the
 *    machine's `~/.cursor/skills` when available) so `/repair-imports` works;
 *  - writes one self-contained orchestration prompt the user can run in a
 *    Claude Code session even when the skills are not on this machine;
 *  - removes the stale `.cursor/autosetup-windows/` directory.
 */
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { safeStat } = require("./fsUtils");

const REPAIR_SKILLS = ["repair-imports", "services-obfuscation"];
const PROMPT_FILE = ".claude/autosetup-repair.md";

async function copySkill(name, destRoot) {
  const source = path.join(os.homedir(), ".cursor", "skills", name, "SKILL.md");
  if (!(await safeStat(source))) return false;
  const destDir = path.join(destRoot, ".claude", "skills", name);
  await fs.mkdir(destDir, { recursive: true });
  await fs.copyFile(source, path.join(destDir, "SKILL.md"));
  return true;
}

function orchestrationPrompt(meta) {
  const issue = meta?.jiraIssue ? ` (задача ${meta.jiraIssue})` : "";
  return `# Autosetup → финальный ремонт${issue}

Автосетап уже выполнил механические шаги **в JS** (не в окнах Cursor):
interactive-loader, services helpers/obfuscation, github-android-aab,
описание в Jira, Facebook hash / Class Name.

Остался шаг, которому нужен агент: **финальный ремонт импортов/экспортов и
запуск на телефоне**. Выполни его в этой сессии Claude Code.

## Что сделать

Запусти скилл **repair-imports** (и справочно раздел *Final repair* из
**services-obfuscation**). Скиллы лежат в \`.claude/skills/\`:

\`\`\`
/repair-imports
\`\`\`

Если скилл не подхватился — выполни то же вручную по этим правилам:

1. Пройди \`App.tsx\`, \`index.js\`, \`Layouts/\`, \`services/\`,
   \`android/app/src/main/java/\` (пропусти \`node_modules\`, \`android/**/build\`).
2. Почини:
   - битые относительные \`import\`/\`require\` (переименованные файлы, split \`*PartNN*\`);
   - \`import { Name }\` из файла, который не экспортирует \`Name\`
     (включая почти одноимённые \`Part\`-файлы) — \`… is not a function (undefined)\`;
   - cipher-имена: один и тот же спеллинг на экспорте и вызове
     (\`colossus*EncryptHex\`/\`DecryptHex\`, \`hexToBytes\`, \`bytesToHex\`);
   - unresolved \`void\`-хелперы — привязать к существующему экспорту/определению;
   - Kotlin/Java: дубликаты \`*SinkV*\` в одной области (\`Conflicting declarations\`),
     DecoyHub import drift, незакрытые лямбды/типы;
   - Animated / RN style-keys, переименованные обфускацией
     (\`transform\`, \`opacity\` и т.д. должны остаться литералами).
3. **Не менять** игровую логику, UI-текст, ключи шифрования и split \`*PartNN*\`.
4. Запусти \`npm run android\`. Готово только когда: \`BUILD SUCCESSFUL\`, процесс
   поднялся, в Metro и \`adb logcat\` нет redbox / \`Unable to resolve module\` /
   \`ReferenceError\` / \`Style property '…' is not supported\`. Чини и перезапускай,
   пока не станет чисто (но не больше 4 попыток на одну и ту же ошибку).
`;
}

/**
 * @param {string} rootPath
 * @param {object} meta
 */
async function prepareRepairHandoff(rootPath, meta) {
  // Drop the old Cursor-window mechanism so it can't fire in parallel.
  const cursorWindows = path.join(rootPath, ".cursor", "autosetup-windows");
  await fs.rm(cursorWindows, { recursive: true, force: true }).catch(() => {});

  const copied = [];
  for (const name of REPAIR_SKILLS) {
    try {
      if (await copySkill(name, rootPath)) copied.push(name);
    } catch {
      // best-effort: a self-contained prompt is written regardless
    }
  }

  const promptPath = path.join(rootPath, PROMPT_FILE);
  await fs.mkdir(path.dirname(promptPath), { recursive: true });
  await fs.writeFile(promptPath, orchestrationPrompt(meta), "utf8");

  const skillNote = copied.length
    ? `скиллы в .claude/skills/: ${copied.join(", ")}`
    : "скиллы ~/.cursor/skills не найдены — промпт самодостаточный";
  return {
    ok: true,
    promptPath: PROMPT_FILE,
    copied,
    details: `${PROMPT_FILE} готов; ${skillNote}`,
  };
}

module.exports = { prepareRepairHandoff, orchestrationPrompt, PROMPT_FILE };
