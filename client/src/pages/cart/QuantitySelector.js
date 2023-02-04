import React, { useState } from "react";
import arrow from "../../assets/images/SideBar/arrow.svg";
import checkMark from "../../assets/images/SideBar/checkMark.svg";

const QuantitySelector = ({ handleSelect, itemQty }) => {
  const [dropdown, setDropDown] = useState(false);
  const [maxQty, setMaxQty] = useState(20);

  let options = [...Array(maxQty)].map((el, i) => (
    <li
      className="p-2 flex items-center justify-between mt-2 mr-0"
      key={i}
      onClick={() => {
        handleSelect(i + 1);
        setDropDown(false);
      }}
    >
      {i + 1}
      <img
        className="m-0 w-[11px] h-fit ml-2"
        style={{ opacity: `${i + 1 === itemQty ? "1" : "0"}` }}
        src={checkMark}
        alt=""
      />
    </li>
  ));
  return (
    <div className=" font-semibold text-sm relative flex flex-col items-center">
      <button
        className="flex items-center bg-none border-none h-5 text-sm font-semibold ml-3"
        onClick={() => setDropDown(!dropdown)}
        onBlur={() => setDropDown(false)}
      >
        <p>{itemQty}</p>
        <img
          className=" mt-0 ml-2"
          style={{
            transform: `${dropdown ? "rotate(180deg)" : "rotate(0deg)"}`,
          }}
          src={arrow}
          alt=""
        />
      </button>
      <ol
        className="w-fit overflow-hidden absolute bottom-[-4px] transition-all duration-300 z-10 rounded bg-white shadow-lg translate-y-full max-h-[400px] overflow-y-scroll"
        style={{
          height: dropdown
            ? "calc(41px * " + `${maxQty ? maxQty : "1"}`
            : "0px",
          opacity: `${dropdown ? "1" : "0"}`,
        }}
      >
        {options}
      </ol>
    </div>
  );
};

export default QuantitySelector;
