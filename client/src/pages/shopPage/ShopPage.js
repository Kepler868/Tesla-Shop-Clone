import React from "react";
import LowerSlider from "./LowerSlider";
import UpperSlider from "./UpperSlider";
import modelS from "../../assets/images/shopPageImg/modelS.avif";
import model3 from "../../assets/images/shopPageImg/model3.avif";
import modelX from "../../assets/images/shopPageImg/modelX.avif";
import modelY from "../../assets/images/shopPageImg/modelY.avif";
import charging from "../../assets/images/shopPageImg/charging.avif";
import lifestyle from "../../assets/images/shopPageImg/lifestyle.avif";
import AutoAccesories from "./AutoAccessories";
import Apparel from "./Apparel";
import { navList } from "../navBar/navData";


const ShopPage = () => {
  return (
    <div>

      <UpperSlider />
      <LowerSlider />
      <AutoAccesories
        shopUrl={`/category/vehicle_accessories`}
        image={modelS}
        title={"Model S Accessories"}
      />
      <AutoAccesories
        shopUrl={`/category/vehicle_accessories`}
        image={model3}
        title={"Model 3 Accessories"}
        textColor={"black"}
      />
      <AutoAccesories
        shopUrl={`/category/vehicle_accessories`}
        image={modelX}
        title={"Model X Accessories"}
      />
      <AutoAccesories
        shopUrl={`/category/vehicle_accessories`}
        image={modelY}
        title={"Model Y Accessories"}
        textColor={"black"}
      />
      <AutoAccesories
        shopUrl={`/category/charging`}
        image={charging}
        title={"Charging"}
      />
      <Apparel />
      <AutoAccesories
        shopUrl={`/category/lifestyle`}
        image={lifestyle}
        title={"Lifestyle"}
      />
    </div>
  );
};

export default ShopPage;
