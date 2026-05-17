
import { MARKET_DRIVERS } from './marketDrivers.js';

export function renderNarrativeCards() {

  return `
    <section class="module briefing-module">

      <div class="briefing-banner">
        当前市场正在交易 AI 算力扩张 + 降息预期回升，
        但长端利率重新上行正在压制估值扩张。
      </div>

      <div class="narrative-grid">

        <div class="narrative-card">
          <h3>市场情绪与资金流向</h3>
          <p>Long-only 继续买入，HF 开始减仓。</p>

          <div class="mini-tags">
            <span>Momentum</span>
            <span>Flow</span>
            <span>Risk-On</span>
          </div>
        </div>

        <div class="narrative-card">
          <h3>行业主线轮动</h3>
          <p>半导体继续领涨，小盘股扩散仍有限。</p>
        </div>

        <div class="narrative-card">
          <h3>宏观风险</h3>
          <p>长端收益率重新上行，滞胀担忧回升。</p>
        </div>

        <div class="narrative-card">
          <h3>Gamma & Positioning</h3>
          <p>OPEX 期间 Gamma 买盘仍在支撑指数。</p>
        </div>

      </div>

    </section>
  `;
}
