import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../categories/Card";
import uuid from "react-uuid";

const CardsGrid = ({ products, subCategory }) => {
  const params = useParams();
  const [subItems, setSubItems] = useState({});
  const [useSubCategories, setUseSubCategories] = useState(false);

  useEffect(() => {
    setUseSubCategories(false);
    if (
      params.productCategory === "vehicle_accessories" ||
      params.productCategory === "apparel"
    ) {
      let copy = {};
      products.forEach((product) => {
        product.options.forEach((option) => {
          if (
            option !== "view-details" &&
            option !== "quick-add+" &&
            option !== "select-size"
          ) {
            setUseSubCategories(true);
            if (copy[option]) {
              copy[option] = [...copy[option], product];
            } else {
              copy[option] = [product];
            }
          }
        });
      });
      setSubItems(copy);
    } else {
      setSubItems({});
    }
  }, [params]);

  return !useSubCategories ? (
    <div id={subCategory.replaceAll("-", "_")} className="mt-10 flex gap-[5%] flex-wrap font-bold max-[960px]:gap-0 max-[960px]:justify-between">
      {products.map((product) => (
        <Card
          key={uuid()}
          itemImg={product.itemImg}
          itemImgHover={product.itemImgHover}
          itemName={product.itemName}
          itemPrice={product.itemPrice}
          stockStatus={product.stockStatus}
          product={product}
        />
      ))}
    </div>
  ) : (
    <>
      {Object.keys(subItems)
        .filter((key) => key === "best-seller")
        .map((key) => (
          <div id={subCategory.replaceAll("-", "_")} className="mt-5" key={uuid()}>
            <h3 className="text-[22px] font-semibold pt-[15px] pr-0">
              {key.replaceAll("-", " ")}
            </h3>
            <div className="mt-10 flex gap-[5%] flex-wrap font-bold max-[960px]:gap-0 max-[960px]:justify-between">
              {subItems[key].map((product) => (
                <Card
                  key={uuid()}
                  itemImg={product.itemImg}
                  itemImgHover={product.itemImgHover}
                  itemName={product.itemName}
                  itemPrice={product.itemPrice}
                  stockStatus={product.stockStatus}
                  product={product}
                />
              ))}
            </div>
          </div>
        ))}
      {Object.keys(subItems)
        .filter((key) => key !== "best-seller")
        .map((key) => (
          <div key={uuid()}>
            <h3 className="text-[22px] font-semibold pt-[15px] pr-0">{key}</h3>
            <div  className="mt-10 flex gap-[5%] flex-wrap font-bold max-[960px]:gap-0 max-[960px]:justify-between">
              {subItems[key].map((product) => (
                <Card
                  key={uuid()}
                  itemImg={product.itemImg}
                  itemImgHover={product.itemImgHover}
                  itemName={product.itemName}
                  itemPrice={product.itemPrice}
                  stockStatus={product.stockStatus}
                  product={product}
                />
              ))}
            </div>
          </div>
        ))}
    </>
  );
};

export default CardsGrid;
