// import { useEffect } from 'react';
export const ChartOne :  React.FC = () => {
    ////////////////////////////////////////////////
// useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
//     script.async = true;

//     const widgetOptions = {
//       symbol: 'IB',
//       width: '100%',
//       height: '100%',
//       locale: 'in',
//       dateRange: '12M',
//       colorTheme: 'light',
//       isTransparent: true,
//       autosize: true,
//       largeChartUrl: '',
//       noTimeScale: true,
//       chartOnly: true,
//     };

//     script.innerHTML = `
//       new TradingView.MediumWidget({
//         "symbol": "${widgetOptions.symbol}",
//         "width": "${widgetOptions.width}",
//         "height": "${widgetOptions.height}",
//         "locale": "${widgetOptions.locale}",
//         "dateRange": "${widgetOptions.dateRange}",
//         "colorTheme": "${widgetOptions.colorTheme}",
//         "isTransparent": ${widgetOptions.isTransparent},
//         "autosize": ${widgetOptions.autosize},
//         "largeChartUrl": "${widgetOptions.largeChartUrl}",
//         "noTimeScale": ${widgetOptions.noTimeScale},
//         "chartOnly": ${widgetOptions.chartOnly},
//       });
//     `;

//     document.getElementById('tradingview-widget-container')?.appendChild(script);

//     return () => {
//         document.getElementById('tradingview-widget-container')?.appendChild(script);
//     };
//   }, []);
// return(

//     <div id="tradingview-widget-container">
//       <div className="tradingview-widget-container__widget"></div>
//     </div>
//////////////////////////////////////////////////////////////////
return(
    <div>

    </div>
)
}