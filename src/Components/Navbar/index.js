import ConnectWalletButton from "../ConnectWalletButton";
import menuData from "../../config/menus";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function MainMenus({ currentPath }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row items-center justify-center align-middle">
      {menuData.map((menuItem) => {
        return (
          <div
            key={menuItem.text}
            onClick={() => {
              navigate(menuItem.url);
            }}
            className={`flex cursor-pointer rounded-md mx-3 px-[6px] py-[3px] justify-center items-center gap-[7.942px] flex-shrink-0 text-[#EDEDED] ${
              currentPath.endsWith(`/${menuItem.text}`.toLowerCase())
                ? "bg-white/[.07] backdrop-blur-[77.2293px]"
                : ""
            }`}
          >
            {menuItem.icon}
            <span>{menuItem.text}</span>
          </div>
        );
      })}
    </div>
  );
}

function Navbar() {
  const location = useLocation();

  return (
    <div className="flex flex-row w-4/5 justify-between mx-auto">
      <img src="/assets/images/logo.svg" alt="logo"></img>
      <MainMenus currentPath={location.pathname} />
      <ConnectWalletButton />
    </div>
  );
}

export default Navbar;
