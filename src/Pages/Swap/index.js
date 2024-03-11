import MainSwap from "../../Components/MainSwap";
import AdOnePool from "../../Components/AdOnePool";
import TradingChart from "../../Components/TradingChart";

function getLocalLanguage() {
  return navigator.language.split("-")[0] || "en";
}

function Swap() {
  const cOptions = {
    locale: getLocalLanguage(),
    debug: false,
    fullscreen: false,
    symbol: "SOLUSDC",
    interval: "60",
    theme: "dark",
    allow_symbol_change: true,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    autosize: true,
  };
  return (
    <div className="flex flex-row w-4/5 justify-between">
      <div className="w-2/5">
        <MainSwap />
      </div>
      <div className="flex flex-col ml-5 w-3/5">
        <AdOnePool />
        <TradingChart chartProperties={cOptions} />
      </div>
    </div>
  );
}

export default Swap;
