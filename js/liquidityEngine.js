
export const LIQUIDITY_DATA = {
  tga: 950,
  rrp: 410,
  reserves: 3200,
  globalLiquidity: "Neutral"
};

export function calculateLiquidityScore() {

  let score = 50;

  if (LIQUIDITY_DATA.tga < 850) score += 10;
  if (LIQUIDITY_DATA.rrp < 300) score += 10;

  return score;
}
