// Fallback 数据，当 API 请求失败时使用
const fallbackPrice = {
  NVDA: 182.4,
  AMD: 174.8,
  AVGO: 352.1,
  TSM: 298.5,
  ASML: 1018.2,
  ARM: 162.7,
  MU: 154.6,
  SMH: 338.4
};

// VOL HEAT 数据
const volHeat = {
  NVDA: 88, AMD: 64, AVGO: 82, TSM: 70,
  ASML: 58, ARM: 72, MU: 86, SMH: 76
};

// 股票列表
const symbols = ["NVDA","AMD","AVGO","TSM","ASML","ARM","MU","SMH"];

// 获取 Yahoo Finance 股价
async function fetchStockPrice(symbol){
    try{
        const res = await fetch(`https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbol}`);
        const data = await res.json();
        return data.quoteResponse.result[0].regularMarketPrice;
    }catch(e){
        console.error('Fetch failed for', symbol, e);
        return fallbackPrice[symbol];
    }
}

// 渲染热力图
export async function renderHeatmap(containerId){
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // 清空

    for(const sym of symbols){
        const price = await fetchStockPrice(sym);
        const change = ((price - fallbackPrice[sym])/fallbackPrice[sym]*100).toFixed(2);
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
