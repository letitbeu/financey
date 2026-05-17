
export const MARKET_DRIVERS = {
  primaryNarrative: {
    en: "AI CAPEX",
    cn: "AI资本开支主线"
  },

  primaryRisk: {
    en: "LONG-END YIELD",
    cn: "长端利率压力"
  },

  marketStructure: {
    en: "MOMENTUM OVER BETA",
    cn: "动量强于贝塔"
  },

  flowState: {
    en: "LONG ONLY BUYING",
    cn: "Long-only资金持续买入"
  },

  regime: {
    en: "SELECTIVE RISK ON",
    cn: "结构性Risk-On"
  }
};

export function generateBannerText() {
  return `
  当前市场正在交易 AI 算力扩张与大型科技资本开支，
  但长端美债收益率重新上行正在压制整体估值扩张。
  `;
}
