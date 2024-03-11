import { useState } from "react"

const tabs = [{
    title: "Swap",
    selelcted_icon: <img src={`/assets/images/Vector (1).png`} alt="swap"/>,
    unselelcted_icon: <img src={`/assets/images/Vector.png`} alt="swap"/>,
},{
    title: "Stream Swap",
    selelcted_icon: <img src={`/assets/images/zondicons_swap.png`} alt="swap"/>,
    unselelcted_icon: <img src={`/assets/images/Vector.png`} alt="swap"/>,
},{
    title: "Stable Swap",
    selelcted_icon: <img src={`/assets/images/zondicons_swap.png`} alt="swap"/>,
    unselelcted_icon: <img src={`/assets/images/Vector.png`} alt="swap"/>,
},{
    title: "Limit Order",
    selelcted_icon: <img src={`/assets/images/zondicons_swap.png`} alt="swap"/>,
    unselelcted_icon: <img src={`/assets/images/Vector.png`} alt="swap"/>,
},{
    title: "xLeverage",
    selelcted_icon: <img src={`/assets/images/zondicons_swap.png`} alt="swap"/>,
    unselelcted_icon: <img src={`/assets/images/Vector.png`} alt="swap"/>,
}]

const SelectTab = ({selectTab, selectedTab}) => {
    return (<div className="w-full flex justify-between">
        {tabs?.map((t, i) => <div key={i} onClick={() => {
            selectTab(i)
        }} className={`flex items-center text-center text-[9px] py-2 px-2 rounded-xl text-white cursor-pointer hover:bg-opacity-50 transition-all ${selectedTab === i?"bg-[#141928]":" bg-inherit"}`}>
            {selectedTab === i?t?.selelcted_icon:t?.unselelcted_icon}
            <p>{t?.title}</p>
        </div>)}
    </div>)
}

export default SelectTab