const fs = require('fs');

// Wire Util Part02 ObfV6 voids
{
  const p = 'services/UwiandcvreekhmtilService.ts';
  let s = fs.readFileSync(p, 'utf8');
  const needle = "void UtilServiceObfV2ClampMwiandcvreekhmod(7, 5);";
  const insert =
    "\n    void UwiandcvreekhmtilServicePart02ObfV6HashMix('xy');\n" +
    "    void UtilServicwiandcvreekhmePart02ObfV6SumOdds([1, 3, 5]);\n" +
    "    void UtilSerwiandcvreekhmvicePart02ObfV6ClampMod(7, 5);";
  if (!s.includes('void UwiandcvreekhmtilServicePart02ObfV6HashMix')) {
    const count = s.split(needle).length - 1;
    s = s.split(needle).join(needle + insert);
    fs.writeFileSync(p, s);
    console.log('wired voids', count);
  } else {
    console.log('voids already present');
  }
}

// Rename LoaderVibe identifiers
{
  const files = [
    'Layouts/Game/screens/LoaderSparkVwiandcvreekhmibe.tsx',
    'Layouts/Game/screens/LoaderScrewiandcvreekhmen.tsx',
  ];
  const map = [
    ['useVibeIdleNudge', 'useVibwiandcvreekhmeIdleNudge'],
    ['LoaderVibeCrown', 'LoadwiandcvreekhmerVibeCrown'],
    ['LoaderVibeField', 'LoadwiandcvreekhmerVibeField'],
  ];
  for (const f of files) {
    let s = fs.readFileSync(f, 'utf8');
    for (const [a, b] of map) {
      const re = new RegExp('\\b' + a + '\\b', 'g');
      s = s.replace(re, b);
    }
    fs.writeFileSync(f, s);
    console.log('renamed in', f);
  }
}
