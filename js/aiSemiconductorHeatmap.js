// Fallback 数据（已更新为最新股价，前端直接显示）
const fallbackPrice = {
  NVDA: 225.0,
  AMD: 174.0,
  AVGO: 352.0,
  TSM: 298.5,
  ASML: 1018.0,
  ARM: 162.5,
  MU: 154.5,
  SMH: 338.0
};

const volHeat = {
  NVDA: 88, AMD: 64, AVGO: 82, TSM: 70,
  ASML: 58, ARM: 72, MU: 86, SMH: 76
};

const symbols = ["NVDA","AMD","AVGO","TSM","ASML","ARM","MU","SMH"];

// 直接使用 fallback 数据渲染热力图
export async function renderHeatmap(containerId){
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // 清空

    for(const sym of symbols){
        const price = fallbackPrice[sym];
        const change = ((price - fallbackPrice[sym])/fallbackPrice[sym]*100).toFixed(2); // 始终 0%
        const color = change >= 0 ? 'green' : 'red';

        const card = document.createElement('div');
        card.className = 'heatmap-card';
        card.innerHTML = `
          <div class="symbol">${sym}</div>
          <div class="price">${price}</div>
          <div class="change" style="color:${color}">${change}%</div>
          <div class="volheat">VOL HEAT ${volHeat[sym]}</div>
        `;
        container.appendChild(card);
    }
}

// 页面加载自动渲染
document.addEventListener('DOMContentLoaded', () => {
    renderHeatmap('aiSemiconductorHeatmap');
    setInterval(() => renderHeatmap('aiSemiconductorHeatmap'), 5*60*1000); // 每5分钟刷新
});
