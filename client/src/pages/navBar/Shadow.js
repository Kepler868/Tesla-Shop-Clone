import React from "react";

const Shadow = ({ setting }) => {


  return (
    <div
      className={
        "absolute bg-[#e9e9e9] rounded-[5px] z-[-1]"
      }
      style={{
        height: `${setting.height}px`,
        width: `${setting.width}px`,
          transform: `translateX(${setting.posX}px)`,
          transition: `${
          setting.initial ? "all 0.5s cubic-bezier(0.55, 0, 0, 1)" : "none"}`,
      }}
    ></div>
  );
};

export default Shadow;
