import React from "react";
import Offer from "../Products/Offer";
import Carousel from "../Carousel";
import Latestpr from "../Products/Latestpr";
import Mostdemandpr from "../Products/Mostdmproducts";
import Backtop from "../Footer/Backtop";
import HeaderBottom from "../Header/HeaderBottom";

import GroupCard from "./GroupCard";

const HomePage = () => {
  return (
    <div>
      <HeaderBottom />
      <div className="max-w-[1440px] mx-auto">
        <Carousel />
        <GroupCard />
        <Offer />
        <Latestpr />
        <Mostdemandpr />
      </div>

      <Backtop />
    </div>
  );
};

export default HomePage;
