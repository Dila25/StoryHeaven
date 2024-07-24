import React from "react";
import MainSection from "./Components/MainSection/MainSection";
import AgeGroup from "./Components/AgeGroup/AgeGroup";
import TopPicks from "./Components/TopPicks/TopPicks";
function Landing() {
  return (
    <div>
      <MainSection/>
      <AgeGroup/>
      <TopPicks/>
    </div>
  );
}

export default Landing;
