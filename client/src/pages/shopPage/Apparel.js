import React from "react";
import menApparel from "../../assets/images/shopPageImg/menApparel.avif";
import womenApparel from "../../assets/images/shopPageImg/womenApparel.avif";
import kidApparel from "../../assets/images/shopPageImg/kidApparel.avif";
import { useNavigate } from "react-router-dom";
import ApparelUnit from "./ApparelUnit";
const Apparel = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between h-screen mb-[-20px]">
      <ApparelUnit image={menApparel} title={"Men's Apparel"} />
      <ApparelUnit image={womenApparel} title={"Women's Apparel"} />
      <ApparelUnit image={kidApparel} title={"Kid's Apparel"} />
    </div>
  );
};

export default Apparel;
