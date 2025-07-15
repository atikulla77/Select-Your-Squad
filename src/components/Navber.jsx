import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

function Navber(props) {
  const navItem = [
    { id: 1, name: "Home" },
    { id: 2, name: "Fixture" },
    { id: 3, name: "Teams" },
    { id: 4, name: "Schedules" },
  ];

    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full bg-white z-50 transition-shadow duration-200 ${
        isScrolled ? "shadow-[0px_0px_15px_5px_#00000012]" : ""
      }`}>
      <div className="[@media(min-width:1300px)]:w-[1290px] w-full mx-auto flex justify-between px-[1.5rem] py-[1rem]">
        <div className="flex items-center cursor-pointer">
          <img src={logo} className="w-[30px]" />
          <h1 className="text-[13px] font-[600] pl-[8px]">BPL-DREAM 11</h1>
        </div>
        <ul className="flex items-center">
          {navItem.map((key) => {
            return (
              <li
                key={key.id}
                className="text-[13px] font-[600] mx-[15px] cursor-pointer"
              >
                {key.name}
              </li>
            );
          })}
          <button className="ml-[7px] text-[13px] font-[600] px-[17px] py-[7px] cursor-pointer rounded-[5px] shadow-[0px_0px_3px_0px_#00000030] flex items-center">
            <span className="px-[4px]">{props.claimFreeCredit}</span> <span>Coin</span>
            <img
              src="https://img.icons8.com/?size=96&id=OFHwDWASQWmX&format=png"
              className="w-[22px] ml-[5px]"
            />
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Navber;
