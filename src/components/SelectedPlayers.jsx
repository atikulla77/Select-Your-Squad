import React from "react";

function SelectedPlayers(props) {
  return (
    <div className="[@media(min-width:1300px)]:w-[1290px] w-[100%] [@media(min-width:1300px)]:px-0 px-[1rem] pb-[5rem] mx-auto flex flex-wrap justify-center">
      {props.selectedPlayerData.map((player) => {
        return (
          <SelectedPlayersCard key={player.playerId} player={player} setSelectedPlayerData={props.setSelectedPlayerData} claimFreeCredit={props.claimFreeCredit} setClaimFreeCredit={props.setClaimFreeCredit}  />
        )
      })}
    </div>
  );
}

function SelectedPlayersCard({ player, setSelectedPlayerData, claimFreeCredit, setClaimFreeCredit }) {
  const DeleteSelectedPlayer = (playerName) => {
    setSelectedPlayerData((prev) =>
      prev.filter((player) => player.name !== playerName)
    );
    setClaimFreeCredit(claimFreeCredit + player.biddingPrice);
  }
  return (
    <div className="w-full flex items-center justify-between border-[1px] border-[#dadada] rounded-[10px] py-[20px] px-[25px] mb-[20px]">
      <div className="flex items-center">
        <div className="w-[50px] h-[50px] overflow-hidden rounded-[50%] mr-[1rem]">
          <img src={player.image} className="w-full h-full object-cover" />
        </div>
        <div className="">
          <h1 className="text-[15px] font-[600] pb-[0.2rem]">
            {player.name}
          </h1>
          <p className="text-[13px] text-[#000000c7] font-[600]">{player.role}</p>
        </div>
      </div>
      <img
        onClick={() => { DeleteSelectedPlayer(player.name) }}
        src="https://img.icons8.com/?size=96&id=63688&format=png"
        className="w-[30px] cursor-pointer"
      />
    </div>
  )
}

export default SelectedPlayers;
