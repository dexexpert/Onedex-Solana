import { useState } from "react";

const slippage = [
  {
    title: "0.25%",
  },
  {
    title: "1%",
  },
  {
    title: "1.5%",
  },
  {
    title: "5%",
  },
  {
    title: "custom",
  },
];

const StreamSwap = () => {
  const [selectedTab, selectTab] = useState(0);
  return (
    <div className="flex flex-col gap-5 text-white rounded-xl">
      {/* Token Input */}
      <div className="flex flex-col w-full gap-5 relative">
        <div className=" rounded-xl border border-purple-800 flex  p-5  bg-[#080713] justify-between ">
          <div className="flex flex-col items-start gap-2">
            <input
              value={100}
              className="text-2xl font-bold bg-transparent text-white border-none outline-none w-full"
            />
            <p className=" text-gray-600 text-xs">$4,360</p>
          </div>
          <div className="flex gap-1 flex-col items-end">
            <div className="flex gap-1 items-center">
              <p className="text-[#8D4FFC]">Max</p>
              <div className="bg-[#0C0F11] px-5 py-2 rounded-lg flex gap-3 items-center cursor-pointer hover:bg-opacity-50 transition-all">
                <img
                  src={`/assets/images/token_1.png`}
                  width={"13px"}
                  height={"10px"}
                  alt="token"
                />
                SOL
                <img src={`/assets/images/select_triangle.png`} alt="token" />
              </div>
            </div>
            <p className=" text-gray-600 text-xs">Balance: 1,000.5476</p>
          </div>
        </div>
        <div className="absolute p-2 rounded-full bg-purple-800 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all hover:bg-purple-500 cursor-pointer">
          <img src={`/assets/images/gg_swap.png`} alt="token" />
        </div>
        <div className=" rounded-xl border border-gray-800 flex  p-5  bg-[#080713] justify-between ">
          <div className="flex flex-col items-start gap-2">
            <input
              value={100}
              className="text-2xl font-bold bg-transparent text-white border-none outline-none w-full"
            />
            <p className=" text-gray-600 text-xs">$4,360</p>
          </div>

          <div className="flex gap-1 flex-col items-end">
            <div className="flex gap-1 items-center">
              <div className="bg-[#0C0F11] px-5 py-2 rounded-lg flex gap-3 items-center cursor-pointer hover:bg-opacity-50 transition-all">
                <img src={`/assets/images/token_2.png`} alt="token" />
                USDC
                <img src={`/assets/images/select_triangle.png`} alt="token" />
              </div>
            </div>
            <p className=" text-gray-600 text-xs">Balance: 1,000.5476</p>
          </div>
        </div>
      </div>
      {/* Swapping Info */}
      <div className="flex flex-col gap-4 w-full">
        <div className="flex w-full justify-between flex-wrap">
          <p>Route</p>
          <p>
            {" "}
            HYPE {"->"} RARE {"->"} EGLD {"->"} USDC
          </p>
        </div>
        <div className="flex w-full justify-between flex-wrap">
          <p>Rate</p>
          <div className="flex flex-col gap-3 items-end">
            <p>1 EGLD = 28.60 USDC</p>
            <p>1 ONE = 0.0053 EGLD</p>
          </div>
        </div>
        <div className="flex w-full justify-between flex-wrap text-green-500">
          <p>Price Impact</p>
          <div className="flex flex-col gap-3 items-end">
            <p>LEGLD {"->"} WEGLD 0,5%</p>
            <p>RARE {"->"} LEGLD 0,5%</p>
            <p>HYPE {"->"} RARE 0,5%</p>
            <p className="text-red-500">HYPE {"->"} ONE 0,5%</p>
          </div>
        </div>
      </div>
      {/* Chunks */}
      <div className="flex flex-col gap-3 py-6">
        <p className=" text-gray-500 text-xs">Number of chunks</p>
        <div className="w-full relative cursor-pointer">
          <div className="p-[2px] w-full bg-gray-500 absolute top-0 rounded-full" />
          <div className="p-[4px] w-1/2 bg-gradient-to-r z-10 from-[#DB01FF] to-[#08F6F1] absolute top-0 -translate-y-1/4 rounded-full">
            <span className="w-2 p-3 rounded-full bg-[#0CF2F2] absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2" />
          </div>
          <div className="absolute w-full">
            <span className="h-3 w-[1px] bg-gray-500 absolute mt-[2px] top-1/2 -translate-y-1/2 left-[0%]">
              <span className="mt-5 text-xs text-gray-500 font-light absolute -translate-x-1/2">
                2
              </span>
            </span>
            <span className="h-3 w-[1px] bg-gray-500 absolute mt-[2px] top-1/2 -translate-y-1/2 left-[25%]">
              <span className="mt-5 text-xs text-gray-500 font-light absolute -translate-x-1/2">
                4
              </span>
            </span>
            <span className="h-3 w-[1px] bg-gray-500 absolute mt-[2px] top-1/2 -translate-y-1/2 left-[50%]">
              <span className="mt-5 text-xs text-gray-500 font-light absolute -translate-x-1/2">
                6
              </span>
            </span>
            <span className="h-3 w-[1px] bg-gray-500 absolute mt-[2px] top-1/2 -translate-y-1/2 left-[75%]">
              <span className="mt-5 text-xs text-gray-500 font-light absolute -translate-x-1/2">
                8
              </span>
            </span>
            <span className="h-3 w-[1px] bg-gray-500 absolute mt-[2px] top-1/2 -translate-y-1/2 left-[100%]">
              <span className="mt-5 text-xs text-gray-500 font-light absolute -translate-x-1/2">
                10
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* Date */}
      <div className="flex flex-col gap-4 w-full">
        <div className="flex w-full justify-between flex-wrap items-center">
          <p className="text-[9px] text-gray-400 font-light">
            Maximum execution date (UTC)
          </p>
          <div className="flex gap-1 items-center">
            <div className="border border-[#323232] px-2 py-1 rounded-lg flex gap-2 items-center cursor-pointer hover:bg-opacity-50 transition-all">
              <p className="text-[9px]">02.09.2024 - 09:25</p>
              <div className=" flex items-center">
                <img src={`/assets/images/bx_calendar.png`} alt="token" />
                <img src={`/assets/images/select_triangle.png`} alt="token" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Slippage */}
      <div className="flex w-full justify-between flex-wrap">
        <p className="flex items-center gap-1 text-xs">
          Slippage <img src={`/assets/images/infornation.png`} alt="token" />
        </p>
        <div className="flex gap-1 items-end">
          {slippage?.map((t, i) => (
            <div
              key={i}
              onClick={() => {
                selectTab(i);
              }}
              className={`flex items-center text-center text-[9px] p-1 rounded-lg text-white cursor-pointer hover:bg-opacity-50 transition-all ${
                selectedTab === i ? "bg-[#141928]" : " bg-inherit"
              }`}
            >
              {selectedTab === i ? t?.selelcted_icon : t?.unselelcted_icon}
              <p>{t?.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Button */}
      <span className=" cursor-pointer text-black bg-gradient-to-r from-[#DB01FF] to-[#08F6F1] p-3 text-center rounded-xl hover:bg-gradient-to-l transition-all">
        Swap
      </span>
    </div>
  );
};

export default StreamSwap;
