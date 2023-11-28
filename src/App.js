import React from "react";
import "./App.css";
import {
  Header,
  SectionMain,
  Numbers,
  RecomendSection,
  CalculateSection,
  PhotoAssets,
  ContactsMenu,
  Footer,
} from "./Components/index";

import RightGradi from "./Components/assets/FX/rightdradi.png";
import LeftGradi from "./Components/assets/FX/leftgradi.png";
import MidLeftGradi from "./Components/assets/FX/midleft.png";
import MidRightGradi from "./Components/assets/FX/midright.png";
import MidleLeftCircle from "./Components/assets/Circles/leftmid.png";
import MidleRightCircle from "./Components/assets/Circles/rightmid.png";
import EndLeftCircle from "./Components/assets/Circles/leftend.png";
const App = () => {
  return (
    <div className="App">
      <img src={RightGradi} className="toprightgradi"></img>
      <Header></Header>
      <img src={LeftGradi} className="topleftgradi"></img>
      <SectionMain></SectionMain>
      <Numbers></Numbers>
      <RecomendSection></RecomendSection>
      <img src={MidleLeftCircle} className="midleleftcircle"></img>
      <CalculateSection></CalculateSection>
      <img src={MidleRightCircle} className="midlerightcircle"></img>
      <img src={MidLeftGradi} className="midleftgradi"></img>
      <img src={MidRightGradi} className="midlerightgradi"></img>
      <img src={EndLeftCircle} className="endleftcircle"></img>
      <PhotoAssets></PhotoAssets>
      <ContactsMenu></ContactsMenu>
      <Footer></Footer>
    </div>
  );
};

export default App;
