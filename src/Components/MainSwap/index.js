import SelectTab from "./SelectTab";
import StreamSwap from "./StreamSwap";
import { useState } from "react";
import LimitOrder from "./LimitOrder";
function MainSwap() {
  const [selectedTab, selectTab] = useState(0);
  return (
    <div className="flex flex-col p-1 gap-5 bg-[#06050d99] rounded-xl h-fit border border-[#1D2025] w-full">
      <SelectTab selectTab={selectTab} selectedTab={selectedTab} />
      <div className="flex flex-col p-5 text-sm w-full">
        {selectedTab === 1 && <StreamSwap />}
        {selectedTab === 3 && (
          <div className="">
            <LimitOrder />
          </div>
        )}
        {selectedTab !== 1 && selectedTab !== 3 && <h1 className="text-white w-full">"Not available"</h1>}
      </div>
    </div>
  );
}

export default MainSwap;
