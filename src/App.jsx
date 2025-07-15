import { useState } from "react";
import "./App.css";
import Navber from "./components/Navber";
import Banner from "./components/Banner";
import AvailablePlayers from "./components/AvailablePlayers";
import ToggleNav from "./components/ToggleNav";
import SelectedPlayers from "./components/SelectedPlayers";
import ShakibAlHasan from "./assets/player_image/ShakibAlHasan.jpg";
import TamimIqbal from "./assets/player_image/TamimIqbal.jpg";
import MushfiqurRahim from "./assets/player_image/MushfiqurRahim.jpg";
import MahmudullahRiyad from "./assets/player_image/MahmudullahRiyad.jpg";
import SabbirRahman from "./assets/player_image/SabbirRahman.jpg";
import NasirHossain from "./assets/player_image/NasirHossain.jpg";
import MohammadMithun from "./assets/player_image/MohammadMithun.jpg";
import MustafizurRahman from "./assets/player_image/MustafizurRahman.jpg";
import TaskinAhmed from "./assets/player_image/TaskinAhmed.jpg";
import RubelHossain from "./assets/player_image/RubelHossain.jpg";
import AlAminHossain from "./assets/player_image/AlAminHossain.jpg";
import ShafiulIslam from "./assets/player_image/ShafiulIslam.jpg";
import MehidyHasan from "./assets/player_image/MehidyHasan.jpg";
import SaifHassan from "./assets/player_image/SaifHassan.jpg";
import LitonDas from "./assets/player_image/LitonDas.jpg";

function App() {
  const PlayersData = [
    {
      playerId: 1,
      name: "Shakib Al Hasan",
      image: ShakibAlHasan,
      country: "Bangladesh",
      role: "All-rounder",
      battingType: "Left-hand Bat",
      bowlingType: "Left-arm Orthodox",
      biddingPrice: 15000,
    },
    {
      playerId: 2,
      name: "Tamim Iqbal",
      image: TamimIqbal,
      country: "Bangladesh",
      role: "Batsman",
      battingType: "Left-hand Bat",
      bowlingType: "Right-arm Medium",
      biddingPrice: 15000,
    },
    {
      playerId: 3,
      name: "Mushfiqur Rahim",
      image: MushfiqurRahim,
      country: "Bangladesh",
      role: "Wicketkeeper Batsman",
      battingType: "Right-hand Bat",
      bowlingType: "Right-arm Medium",
      biddingPrice: 15000,
    },
    {
      playerId: 4,
      name: "Mahmudullah Riyad",
      image: MahmudullahRiyad,
      country: "Bangladesh",
      role: "All-rounder",
      battingType: "Right-hand Bat",
      bowlingType: "Right-arm Medium",
      biddingPrice: 15000,
    },
    {
      playerId: 5,
      name: "Sabbir Rahman",
      image: SabbirRahman,
      country: "Bangladesh",
      role: "Batsman",
      battingType: "Right-hand Bat",
      bowlingType: "Right-arm Off Spin",
      biddingPrice: 15000,
    },
    {
      playerId: 6,
      name: "Nasir Hossain",
      image: NasirHossain,
      country: "Bangladesh",
      role: "All-rounder",
      battingType: "Right-hand Bat",
      bowlingType: "Right-arm Off Spin",
      biddingPrice: 15000,
    },
    {
      playerId: 7,
      name: "Mohammad Mithun",
      image: MohammadMithun,
      country: "Bangladesh",
      role: "Batsman",
      battingType: "Right-hand Bat",
      bowlingType: "Right-arm Medium",
      biddingPrice: 15000,
    },
    {
      playerId: 8,
      name: "Mustafizur Rahman",
      image: MustafizurRahman,
      country: "Bangladesh",
      role: "Bowler",
      battingType: "Right-hand Bat",
      bowlingType: "Left-arm Fast Medium",
      biddingPrice: 15000,
    },
    {
      playerId: 9,
      name: "Taskin Ahmed",
      image: TaskinAhmed,
      country: "Bangladesh",
      role: "Bowler",
      battingType: "Right-hand Bat",
      bowlingType: "Right-arm Fast",
      biddingPrice: 15000,
    },
    {
      playerId: 10,
      name: "Rubel Hossain",
      image: RubelHossain,
      country: "Bangladesh",
      role: "Bowler",
      battingType: "Right-hand Bat",
      bowlingType: "Right-arm Fast",
      biddingPrice: 15000,
    },
    {
      playerId: 11,
      name: "Al-Amin Hossain",
      image: AlAminHossain,
      country: "Bangladesh",
      role: "Bowler",
      battingType: "Right-hand Bat",
      bowlingType: "Right-arm Fast Medium",
      biddingPrice: 15000,
    },
    {
      playerId: 12,
      name: "Shafiul Islam",
      image: ShafiulIslam,
      country: "Bangladesh",
      role: "Bowler",
      battingType: "Right-hand Bat",
      bowlingType: "Right-arm Fast",
      biddingPrice: 15000,
    },
    {
      playerId: 13,
      name: "Mehidy Hasan",
      image: MehidyHasan,
      country: "Bangladesh",
      role: "All-rounder",
      battingType: "Right-hand Bat",
      bowlingType: "Off Spin",
      biddingPrice: 15000,
    },
    {
      playerId: 14,
      name: "Saif Hassan",
      image: SaifHassan,
      country: "Bangladesh",
      role: "Batsman",
      battingType: "Right-hand Bat",
      bowlingType: "Right-arm Medium",
      biddingPrice: 15000,
    },
    {
      playerId: 15,
      name: "Liton Das",
      image: LitonDas,
      country: "Bangladesh",
      role: "Wicketkeeper Batsman",
      battingType: "Right-hand Bat",
      bowlingType: "Right-arm Medium",
      biddingPrice: 15000,
    },
  ];
  const [playerPage, setPlayerPage] = useState(true);
  const [claimFreeCredit, setClaimFreeCredit] = useState(0);
  const [selectedPlayerData, setSelectedPlayerData] = useState([])

  return (
    <div>
      <Navber claimFreeCredit={claimFreeCredit} />
      <Banner
        claimFreeCredit={claimFreeCredit}
        setClaimFreeCredit={setClaimFreeCredit}
      />
      <ToggleNav playerPage={playerPage} setPlayerPage={setPlayerPage} selectedPlayerData={selectedPlayerData} />
      {playerPage ? (
        <AvailablePlayers
          PlayersData={PlayersData}
          selectedPlayerData={selectedPlayerData}
          setSelectedPlayerData={setSelectedPlayerData}

          claimFreeCredit={claimFreeCredit}
          setClaimFreeCredit={setClaimFreeCredit}
        />
      ) : (
        <SelectedPlayers
          PlayersData={PlayersData}
          selectedPlayerData={selectedPlayerData}
          setSelectedPlayerData={setSelectedPlayerData}
          
          claimFreeCredit={claimFreeCredit}
          setClaimFreeCredit={setClaimFreeCredit}
        />
      )}
      <div className="h-[20rem]">

      </div>
    </div>
  );
}

export default App;
