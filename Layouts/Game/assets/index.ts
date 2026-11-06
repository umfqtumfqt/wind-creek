/**
 * Fixed Codex asset contract. NEVER reference an image name that is not listed here.
 */
export const assets = {
  bgGame: require('../../../assets/bg_game.png'),
  logo: require('../../../assets/logo.png'),
  iconHome: require('../../../assets/icon_home.png'),
  iconPause: require('../../../assets/icon_pause.png'),
  sprite1: require('../../../assets/sprite_1.png'),
  sprite2: require('../../../assets/sprite_2.png'),
  sprite3: require('../../../assets/sprite_3.png'),
  sprite4: require('../../../assets/sprite_4.png'),
  sprite5: require('../../../assets/sprite_5.png'),
  buttonRect: require('../../../assets/button_rect.png'),
  buttonRound: require('../../../assets/button_round.png'),
};

/** The five reel symbols, index-aligned with SYMBOLS in constants/configwiandcvreekhm.ts */
export const SPRITES = [
  assets.sprite1,
  assets.sprite2,
  assets.sprite3,
  assets.sprite4,
  assets.sprite5,
];

export default assets;

/* obfuscation-batch:v1 */
function wiandcvreekhmindexObfV1Mix(a: number, b: number): number {
  const base = 51;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmindexObfV1Fold(text: string): number {
  let acc = 51;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
