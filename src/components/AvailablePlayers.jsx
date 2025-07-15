import React, { useEffect, useState } from "react";

function AvailablePlayers(props) {
  return (
    <div className="[@media(min-width:1300px)]:w-[1290px] w-[100%] pb-[5rem] mx-auto flex flex-wrap justify-center">
      {props.PlayersData.map((player) => {
        return (
          AvailablePlayersCard(player, props.selectedPlayerData, props.setSelectedPlayerData, props.claimFreeCredit, props.setClaimFreeCredit)
        );
      })}
    </div>
  );
}

function AvailablePlayersCard(player, selectedPlayerData, setSelectedPlayerData, claimFreeCredit, setClaimFreeCredit) {
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const ChoosePlayer = (player) => {
    if (claimFreeCredit >= player.biddingPrice) {
      setClaimFreeCredit(claimFreeCredit - player.biddingPrice)
      if (selectedPlayerData.some(p => p.name === player.name)) {
        alert("Player Already Taken")
      } else {
        if (selectedPlayerData.length === 6) {
          alert("Already 6 Player Has Been Taken")
        } else {
          setButtonDisabled(true)
          setSelectedPlayerData((prev) => [...prev, player]);
        }
      }
    } else {
      alert("You Don't Have Enough Balance");
    }




  }

  useEffect(() => {
    if (selectedPlayerData.some(p => p.name === player.name)) {
      setButtonDisabled(true)
    }
  }, [selectedPlayerData, player.name])

  return (
    <div key={player.playerId} className="w-[315px] mx-auto my-[10px]">
      <div className="w-full px-[10px] rounded-[12px]">
        <div className="w-full relative">
          <div className="w-full h-[200px] rounded-[12px] border-[2px] border-[#00000008]">
            <img
              src={player.image}
              className="w-full h-full object-cover rounded-[10px] "
            />
          </div>
          <div className="absolute left-0 bottom-[-12px] w-[135px] h-[62px] border-t-[1px] border-r-[1px] border-[#00000008] bg-white rounded-tr-[18px] pt-[9px] pr-[9px]">
            <div className="w-full h-full bg-white border-t-[2px] border-[#0000001a] border-l-[2px] border-r-[2px] rounded-tr-[12px] rounded-tl-[12px]  px-[10px] pt-[9px]">
              <button className="text-white bg-[#ff5d97] text-[13px] font-[600] w-full py-[11px] rounded-[7px]">
                $ {player.biddingPrice}
              </button>
            </div>
          </div>
          {/* ``````````` */}
          <div className="w-[20px] h-[20px] rounded-[50%] absolute left-0 bottom-[50px] bg-transparent shadow-[-9px_10px_0_#fff] select-none"></div>
          <div className="w-[20px] h-[20px] rounded-[50%] absolute left-[135px] bottom-0 bg-transparent shadow-[-9px_10px_0_#fff] select-none"></div>
          <div
            className="w-[18px] h-[17px] rounded-[50%] absolute left-[123px] bottom-[-12px] bg-white shadow-[-10px_10px_0_#fff] select-none "
            style={{ overflow: "hidden" }}
          >
            <div className="w-full h-full relative rounded-[50%] border-l-[2px] border-b-[2px] border-[#0000001a]">
              <div className="absolute left-[0px] bottom-0 w-[23px] h-[25px] rounded-b-[10px] rounded-t-[10px] bg-white"></div>
            </div>
          </div>
          {/* ``````````` */}
        </div>
        <div className="w-full mt-[10px] rounded-br-[12px] rounded-bl-[12px] rounded-tr-[12px] px-[20px] py-[20px] bg-white text-black  border-[2px] border-[#0000001a]">
          <div className="flex items-center players-center">
            <img
              className="w-[17px] h-[17px] opacity-[0.8]"
              src="https://img.icons8.com/?size=100&id=66957&format=png"
            />
            <p className="pl-[9px] text-[13px] font-[600] text-[#222222e8] ">
              Name:{" "}
              <span className="text-[#222222b5]">{player.name}</span>
            </p>
          </div>
          <div className="flex items-center players-center pt-[5px]">
            <img
              className="w-[17px] h-[17px] opacity-[0.8]"
              src="https://img.icons8.com/?size=100&id=60425&format=png"
            />
            <p className="pl-[9px] text-[13px] font-[600] text-[#222222e8] ">
              Country:{" "}
              <span className="text-[#222222b5]">{player.country}</span>
            </p>
          </div>
          <div className="flex items-center players-center pt-[5px]">
            <img
              className="w-[17px] h-[17px] opacity-[0.8]"
              src="https://img.icons8.com/?size=100&id=598&format=png"
            />
            <p className="pl-[9px] text-[13px] font-[600] text-[#222222e8] ">
              Role:{" "}
              <span className="text-[#222222b5]">{player.role}</span>
            </p>
          </div>
          <div className="flex items-center players-center pt-[5px]">
            <img
              className="w-[17px] h-[17px] opacity-[0.8]"
              src="https://img.icons8.com/?size=100&id=4252&format=png"
            />
            <p className="pl-[9px] text-[13px] font-[600] text-[#222222e8] ">
              Batting Type:{" "}
              <span className="text-[#222222b5]">
                {player.battingType}
              </span>
            </p>
          </div>
          <div className="flex items-center players-center pt-[5px] pb-[8px]">
            <img
              className="w-[17px] h-[17px] opacity-[0.8]"
              src="https://img.icons8.com/?size=48&id=khOj26VaIE3E&format=png"
            />
            <p className="pl-[9px] text-[13px] font-[600] text-[#222222e8] ">
              Bowling Type:{" "}
              <span className="text-[#222222b5]">
                {player.bowlingType}
              </span>
            </p>
          </div>
          <button className={`w-full ${buttonDisabled ? "bg-[#ff5d9678] text-white cursor-not-allowed" : "bg-[#ff5d97] text-white cursor-pointer"} rounded-[5px] py-[9px] text-[13px] font-[600]`} onClick={() => { ChoosePlayer(player) }}>
            Choose Player
          </button>
        </div>
      </div>
    </div>
  )
}

export default AvailablePlayers;


