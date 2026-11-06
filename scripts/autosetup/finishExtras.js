const { detectFragmentFromConstants } = require("./applyMeta");
const { isJiraConfigured } = require("./fetchJiraTask");
const { applyInteractiveLoader } = require("./applyInteractiveLoader");
const { applyServiceHelpers } = require("./applyServiceHelpers");
const { repairObfDrift } = require("./repairObfDrift");
const { repairProjectJsRefs } = require("./repairJsRefs");
const { checkProjectPaths } = require("./checkPaths");
const { postGameDescription } = require("./postGameDescription");
const { attachGitFromJira } = require("./attachGitFromJira");
const { setupGithubAab } = require("./setupGithubAab");
const { pushFacebookJira } = require("./pushFacebookJira");
const { prepareRepairHandoff } = require("./repairHandoff");

const TAIL_STEPS = ["loader", "helpers", "description", "git-remote", "github-aab", "fb-jira", "repair"];

/**
 * End of a full autosetup. The mechanical skill work now runs directly in JS
 * (interactive loader, services/obfuscation helpers + a light repair pass,
 * Jira description, .git from GitHub, GitHub AAB workflow + secrets,
 * FB hash / class name). Only the final import/export + phone-launch repair
 * still needs an agent: that is handed off to Claude Code (see repairHandoff),
 * not to Cursor extension windows.
 *
 * Every step is best-effort: a failure (usually Jira/GitHub network or no `gh`)
 * is collected as a warning and does not abort the autosetup.
 */
async function runFinishExtras(rootPath, meta, { only } = {}) {
  const want = (name) => !only || only.has(name);
  const warnings = [];
  const ran = [];
  const jira = isJiraConfigured(meta);
  let fragment = meta?.fragmentTo || "";
  try {
    fragment = (await detectFragmentFromConstants(rootPath)) || fragment;
  } catch {
    // fall back to meta.fragmentTo / "" — a tail without a fragment still runs
  }

  const step = async (name, label, fn) => {
    process.stdout.write(`[autosetup] ${label}... `);
    try {
      const result = await fn();
      console.log(result?.details || "ok");
      ran.push(name);
      return result;
    } catch (error) {
      const reason = error instanceof Error ? error.message : String(error);
      console.log(`warn: ${reason}`);
      warnings.push({ title: label, reason });
      return null;
    }
  };

  if (want("loader")) {
    await step("loader", "interactive loader", () =>
      applyInteractiveLoader(rootPath, { fragment, appName: meta?.appName })
    );
  }

  if (want("helpers")) {
    await step("helpers", "services helpers (obfuscation)", () =>
      applyServiceHelpers(rootPath, fragment)
    );
    await step("helpers", "repair platform members + duplicate parts", () =>
      repairObfDrift(rootPath, { fragment })
    );
    // Fix used-but-undefined fragment identifiers (drifted helper calls, cipher
    // name mismatches). These parse fine and pass the path check but throw at
    // runtime: ReferenceError / "Runtime not ready".
    await step("helpers", "repair JS helper/cipher refs", async () => {
      const r = await repairProjectJsRefs(rootPath, { fragment });
      if (r.unresolved.length) {
        for (const u of r.unresolved) {
          warnings.push({ title: "js-ref", reason: `undefined ${u}` });
        }
      }
      return r;
    });
    // Report-only: surfaces broken relative paths for the agent repair pass.
    await step("helpers", "path-check (tail)", async () => {
      const check = await checkProjectPaths(rootPath);
      if (!check.ok) {
        for (const p of check.problems) {
          warnings.push({ title: "path-check", reason: `${p.file} → ${p.ref}` });
        }
        return { details: `FOUND ${check.problems.length} broken refs (чинит repair-imports)` };
      }
      return { details: `ok (${check.checkedFiles} files)` };
    });
  }

  if (want("description")) {
    if (jira) {
      await step("description", "game description → Jira", () =>
        postGameDescription(rootPath, meta)
      );
    } else {
      console.log("[autosetup] description: Jira не настроен — пропуск");
    }
  }

  // git-remote resolves the GitHub token/owner/repo that github-aab needs.
  let gitInfo = null;
  const needGit = want("git-remote") || want("github-aab");
  if (needGit) {
    if (jira) {
      gitInfo = await step("git-remote", ".git from GitHub (Jira token)", () =>
        attachGitFromJira(rootPath, meta)
      );
    } else {
      console.log("[autosetup] git-remote/github-aab: Jira не настроен — пропуск");
    }
  }

  if (want("github-aab")) {
    if (gitInfo) {
      await step("github-aab", "GitHub AAB workflow + secrets", () =>
        setupGithubAab(rootPath, gitInfo)
      );
    } else if (jira) {
      warnings.push({
        title: "github-aab",
        reason: "git-remote не дал owner/repo/token — workflow не настроен",
      });
    }
  }

  if (want("fb-jira")) {
    if (jira) {
      await step("fb-jira", "Facebook hash / Class Name → Jira", () =>
        pushFacebookJira(rootPath, meta)
      );
    } else {
      console.log("[autosetup] fb-jira: Jira не настроен — пропуск");
    }
  }

  // Final repair + phone launch stays an agent task — hand off to Claude Code.
  let repairHandoff = null;
  if (want("repair")) {
    repairHandoff = await step("repair", "подготовка хэндоффа в Claude Code", () =>
      prepareRepairHandoff(rootPath, meta)
    );
  }

  if (repairHandoff?.promptPath) {
    console.log(
      `[autosetup] финальный ремонт: откройте Claude Code в проекте и выполните ` +
        `/repair-imports (или вставьте ${repairHandoff.promptPath})`
    );
  }

  return { warnings, ran, repairHandoff };
}

module.exports = { runFinishExtras, TAIL_STEPS };
