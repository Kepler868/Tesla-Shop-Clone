import React from 'react';
import { useNavigate } from "react-router-dom";

const ApparelUnit = ({ image, title }) => {
    const navigate = useNavigate()
    return (
        <div className="w-[33%]">
        <img className="object-cover h-full" src={image} />
        <div className="relative bottom-[168px] flex flex-col items-center">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <button
            onClick={() => navigate("/category/apparel")}
            className="w-40 border-[3px] bg-transparent border-black rounded-[5px] mt-5 p-2 transition-all ease-in-out duration-500 hover:bg-black hover:text-white 
          outline outline-offset-[-5px] outline-2 outline-white"
          >
            {" "}
            Shop Now
          </button>
        </div>
      </div>
    );
};

export default ApparelUnit;