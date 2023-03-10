import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import uuid from "react-uuid";
import items from "../../Data.js";
import CardsGrid from "./CardsGrid.js";

const ItemsPage = () => {
  const params = useParams();

  useEffect(() => {
    if (params.subCategory) {
      setTimeout(function () {
        let divRef = document.getElementById(`${params.subCategory}`);
        window.scrollTo({
          top: divRef.offsetTop - 140,
          left: 0,
          behavior: "smooth",
        });
      },250);
    } else {
      window.scrollTo(0, 0);
    }
  }, [params.subCategory]);

  return (
    <div className="p-[3%] pt-[50px]">
      {items
        .filter(
          (category) =>
            category.category === params.productCategory.replaceAll("_", "-")
        )
        .map((category) => (
          <div key={category.category} className="capitalize">
            {category.category === "charging" ||
            category.category === "lifestyle" ? (
              <div className="m-auto pt-[50px] pr-0 text-left capitalize">
                <h2 className="text-xl font-gothamMedium">
                  {category.category}
                </h2>
              </div>
            ) : (
              ""
            )}

            {category.subCategories.map((sub) => (
              <div
                key={uuid()}
                id={sub.subCategory}
                className="pt-10 pr-0 pb-12"
              >
                <h3
                  className={
                    category.category !== "charging" ||
                    category.category !== "lifestyle"
                      ? "font-gothamMedium text-xl"
                      : "font-bold text-[22px]" + " pt-[15px] pr-0"
                  }
                >
                  {sub.subCategory.replaceAll("-", " ")}
                </h3>

                <CardsGrid
                  products={sub.products}
                  subCategory={sub.subCategory}
                />
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default ItemsPage;
