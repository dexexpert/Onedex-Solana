import { useState } from "react";

const LimitOrder = () => {
  const [selectedTab, selectTab] = useState(0);
  return (
    <div className="flex flex-col gap-5 text-white rounded-xl w-full relative">
      {/*Pair */}
      <div className="flex flex-row gap-3 relative align-middle items-center">
        <img
          className="w-[24px] h-[13px]"
          src={`/assets/images/one.png`}
          //   width={"24px"}
          //   height={"5px"}
          alt="token"
        />
        <img
          className="w-[24px] h-[20px]"
          src={`/assets/images/token_1.png`}
          //   width={"25px"}
          //   height={"5px"}
          alt="token"
        />
        <span>ONE</span>
        <span>/</span>
        <span>SOL</span>
        <img src={`/assets/images/down.png`} alt="token" />
      </div>
      <div className="w-full p-1 bg-[#090E14] rounded-[8px] h-[40px] flex flex-row align-middle items-center border-[0.3px] border-[#1D2025]">
        <div className=" cursor-pointer w-full h-full flex justify-center items-center align-middle rounded-[7px] bg-[#08F6F1] text-[#07030E] font-semibold">
          Buy
        </div>
        <div className=" cursor-pointer w-full h-full flex justify-center items-center align-middle">
          Sell
        </div>
      </div>
      {/* Pay */}
      <div>
        <span className="text-[#8C8C8C] text-xs">You Pay</span>
        <div className="flex flex-row w-full px-[10px] h-[50px] bg-[#080713] rounded-[10px] border-[0.2px] border-[#323232] align-middle items-center justify-between">
          <div className="flex flex-row gap-2 align-middle items-center">
            <img
              className="w-[24px] h-[9.72px]"
              src={`/assets/images/one.png`}
              //   width={"24px"}
              //   height={"5px"}
              alt="token"
            />
            <span>ONE</span>
          </div>
          <div className="flex flex-row gap-2 align-middle items-center">
            <span className="text-[#8D4FFC]">Max</span>
            <span>00.00</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full px-[10px] h-[50px] bg-[#080713] rounded-[10px] border-[0.5px] border-[#23F7DD] align-middle items-center justify-between text-[#23F7DD] font-light">
        <div className="flex flex-row gap-2 align-middle items-center">
          <span>Execute at</span>
        </div>
        <div className="flex flex-row gap-2 align-middle items-center">
          <span>00.00</span>
          <img
            className="w-[24px] h-[15px]"
            src={`/assets/images/one.png`}
            //   width={"24px"}
            //   height={"5px"}
            alt="token"
          />
        </div>
      </div>
      {/*Receive */}
      <div>
        <span className="text-[#8C8C8C] text-xs">You Pay</span>
        <div className="flex flex-row w-full px-[10px] h-[50px] bg-[#080713] rounded-[10px] border-[0.2px] border-[#323232] align-middle items-center justify-between">
          <div className="flex flex-row gap-2 align-middle items-center">
            <img
              className="w-[24px] h-[16px]"
              src={`/assets/images/token_1.png`}
              //   width={"24px"}
              //   height={"5px"}
              alt="token"
            />
            <span>ONE</span>
          </div>
          <div className="flex flex-row gap-2 align-middle items-center">
            <span>≈ 00.00</span>
          </div>
        </div>
      </div>

      <div>
        <span>Stop Limit</span>
      </div>

      {/*Buy if price rises to */}
      <div>
        <span className="text-[#8C8C8C] text-xs">Buy if price rises to:</span>
        <div className="flex flex-row w-full px-[10px] h-[50px] bg-[#080713] rounded-[10px] border-[0.2px] border-[#323232] align-middle items-center justify-between">
          <div className="flex flex-row gap-2 align-middle items-center">
            <img
              className="w-[24px] h-[16px]"
              src={`/assets/images/token_1.png`}
              //   width={"24px"}
              //   height={"5px"}
              alt="token"
            />
            <span>ONE</span>
          </div>
          <div className="flex flex-row gap-2 align-middle items-center">
            <span>≈ 00.00</span>
          </div>
        </div>
      </div>

      {/* Chunks */}
      <div className="flex flex-col gap-3 py-6">
        <p className=" text-gray-500 text-xs">Slippage</p>
        <div className="w-full relative cursor-pointer">
          <div className="p-[2px] w-full bg-gray-500 absolute top-0 rounded-full" />
          <div className="p-[4px] w-1/2 bg-gradient-to-r z-10 from-[#DB01FF] to-[#08F6F1] absolute top-0 -translate-y-1/4 rounded-full">
            <span className="w-2 p-3 rounded-full bg-[#0CF2F2] absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2" />
          </div>
          <div className="absolute w-full">
            <span className="h-3 w-[1px] bg-gray-500 absolute mt-[2px] top-1/2 -translate-y-1/2 left-[0%]">
              <span className="mt-5 text-xs text-gray-500 font-light absolute -translate-x-1/2">
                0.1%
              </span>
            </span>
            <span className="h-3 w-[1px] bg-gray-500 absolute mt-[2px] top-1/2 -translate-y-1/2 left-[25%]">
              <span className="mt-5 text-xs text-gray-500 font-light absolute -translate-x-1/2">
                5%
              </span>
            </span>
            <span className="h-3 w-[1px] bg-gray-500 absolute mt-[2px] top-1/2 -translate-y-1/2 left-[50%]">
              <span className="mt-5 text-xs text-gray-500 font-light absolute -translate-x-1/2">
                10%
              </span>
            </span>
            <span className="h-3 w-[1px] bg-gray-500 absolute mt-[2px] top-1/2 -translate-y-1/2 left-[75%]">
              <span className="mt-5 text-xs text-gray-500 font-light absolute -translate-x-1/2">
                15%
              </span>
            </span>
            <span className="h-3 w-[1px] bg-gray-500 absolute mt-[2px] top-1/2 -translate-y-1/2 left-[100%]">
              <span className="mt-5 text-xs text-gray-500 font-light absolute -translate-x-1/2">
                20%
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* Button */}
      <span className=" cursor-pointer text-[#0B0B0B] bg-[#08F6F1] p-3 text-center rounded-xl hover:bg-[#419d9c] transition-all">
        Place Order
      </span>
    </div>
  );
};

export default LimitOrder;
