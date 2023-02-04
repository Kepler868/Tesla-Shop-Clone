import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../app/reducers/reducers";

const Card = ({
  itemImg,
  itemImgHover,
  itemName,
  itemPrice,
  stockStatus,
  product,
}) => {
  const [size, setSize] = useState(false);
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="w-[30%] mb-24 text-left relative max-[960px]:w-[48%] hover:transition-all hover:duration-100 font-gothamMedium"
    >
      {!stockStatus && (
        <p className="text-white text-sm text-center py-2 px-3 absolute bg-gray-500">
          Out Of Stock
        </p>
      )}

      <div className="h-full">
        <div className="hover:opacity-0">
          <img className="object-cover w-full h-full" src={itemImg} alt="" />
        </div>
        <div className="opacity-0 hover:opacity-100 absolute top-0 shadow-lg ">
          <img className="h-full w-full" src={itemImgHover} alt="" />
          <div
            className="h-[22%] absolute w-full translate-y-[-98%] bg-white z-30 flex justify-center items-center transition-all duration-200 shadow-lg cursor-pointer "
            style={{ opacity: `${hover ? "100%" : "0%"}` }}
            onClick={() => dispatch(addItem(product))}
            onMouseEnter={() => setSize(true)}
            onMouseLeave={() => setSize(false)}
          >
            {product.options.includes("quick-add+") ? (
              <p>Quick Add to Cart +</p>
            ) : (
              <p>Quick Add to Cart +</p>
            )}
            {size && product.options.includes("select-size") && (
              <div className="w-full h-full absolute bottom-0 bg-white flex flex-col justify-center items-center gap-[10%]">
                <h4 className="max-[960px]:text-base text-xl"> Select Your Size</h4>
                <ul className="list-style-none flex justify-around w-full">
                  <li className="underline decoration-black">S</li>
                  <li className="underline decoration-black">M</li>
                  <li className="underline decoration-black">L</li>
                  <li className="underline decoration-black">XL</li>
                  <li className="underline decoration-black">XXL</li>
                  <li className="underline decoration-black">3XL</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="h-3 ">
        <div>
          <p className="hover:text-red-600 hover:cursor-pointer">{itemName}</p>
          <p className="itemPrice">
            $
            {typeof itemPrice === "object"
              ? `${itemPrice[0].toLocaleString(
                  "en-US"
                )} - $${itemPrice[1].toLocaleString("en-US")}`
              : itemPrice.toLocaleString("en-US")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
