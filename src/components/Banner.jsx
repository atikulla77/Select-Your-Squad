import React from "react";
import bg from "../assets/bg-shadow.png";
import logo from "../assets/banner-main.png";

function Banner(props) {
  return (
    <div className="[@media(min-width:1300px)]:w-[1290px] w-[96%] mx-auto h-[30rem] mt-[70px] relative">
      <div className="w-full h-full rounded-[13px] overflow-hidden shadow-[0px_0px_3px_0px_#00000026] absolute top-0 left-0 z-[1] bg-[#e9e9e97a]">
        <img src={bg} className="w-full h-full object-center" />
      </div>

      <div className="w-full h-full flex flex-col justify-center text-center relative z-[2]">
        <img src={logo} className="w-[180px] mx-auto" />
        <h1 className="pt-[1rem] text-[27px] font-[700]">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-[16px] font-[600] pt-[10px] pb-[1rem]">
          Beyond Boundaries Beyond Limits
        </p>
        <div className="w-fit mx-auto p-[5px] bg-transparent border-[1px] border-[#ff990096] rounded-[12px] cursor-pointer">
          <button className=" text-[13px] font-[600] rounded-[8px] px-[20px] py-[9px] bg-[#ff9900] text-white w-fit mx-auto cursor-pointer" onClick={() => {props.setClaimFreeCredit(props.claimFreeCredit + 35000)}}>
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
