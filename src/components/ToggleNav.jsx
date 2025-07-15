import React from "react";

function ToggleNav(props) {
  return (
    <div className="[@media(min-width:1280px)]:w-[1270px] w-[96%] mx-auto py-[2rem]">
      <div className="w-full flex items-center justify-between">
        {props.playerPage ? (
          <h1 className="text-[18px] font-[700]">Available Players</h1>
        ) : (
          <h1 className="text-[18px] font-[700]">Selected Players ({props.selectedPlayerData.length}/6)</h1>
        )}

        <div className="flex items-center rounded-[7px] shadow-[0px_0px_3px_0px_#00000030]">
          <button
            className={`text-[13px] font-[600] px-[22px] py-[9px] rounded-l-[11px] cursor-pointer ${
              props.playerPage ? "bg-[#ff9900] text-white" : "text-[#4e4e4e]"
            }`}
            onClick={() => {props.setPlayerPage(true)}}
          >
            Available
          </button>
          <button
            className={`text-[13px] font-[600] px-[22px] py-[9px] rounded-r-[11px] cursor-pointer ${
              props.playerPage ? "text-[#4e4e4e]" : "bg-[#ff9900] text-white"
            }`}
            onClick={() => {props.setPlayerPage(false)}}
          >
            Selected (<span className="">{props.selectedPlayerData.length}</span>)
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToggleNav;
