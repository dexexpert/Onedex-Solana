function AdOnePool() {
  return (
    <div className="flex flex-row text-white w-full rounded-md border border-[0.5px] border-gray-700 bg-opacity-60 bg-black px-[23px] py-[10px] mb-[24px]">
      <div className="flex flex-row gap-2 mr-20 items-center justify-center align-middle">
        <img
          src="/assets/images/AdPoolTitle.svg"
          width="36px"
          height="15px"
          alt="pool title"
        />
        <span>ONE / USDC</span>
      </div>
      <div className="flex flex-row gap-6">
        <div className="flex flex-col">
          <span>$0,062</span>
          <span className="text-[#999] font-lining-nums font-proportional-nums font-Inter text-xs font-normal font-normal-400 leading-24">
            $0,062
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[#23F7DD]">+6.09%</span>
          <span className="text-[#999] font-lining-nums font-proportional-nums font-Inter text-xs font-normal font-normal-400 leading-24">
            24h Change
          </span>
        </div>
        <div className="flex flex-col">
          <span>0,075</span>
          <span className="text-[#999] font-lining-nums font-proportional-nums font-Inter text-xs font-normal font-normal-400 leading-24">
            24h High
          </span>
        </div>
        <div className="flex flex-col">
          <span>0,053</span>
          <span className="text-[#999] font-lining-nums font-proportional-nums font-Inter text-xs font-normal font-normal-400 leading-24">
            24h Low
          </span>
        </div>
      </div>
    </div>
  );
}

export default AdOnePool;
