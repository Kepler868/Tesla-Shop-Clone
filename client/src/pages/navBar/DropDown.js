import React from "react";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";

export default function DropDown({ dropDown, handleLeave, handleActiveNav }) {
  const navigate = useNavigate();
  return (
    <div
      className="flex fixed p-[80px] w-full bg-white transition-all duration-500 gap-[32px] z-10 h-full max-h-[50vh] shadow-tesla overflow-scroll"
      style={{
        opacity: `${dropDown.category ? "1" : "0"}`,
        transform: `${
          dropDown.category ? "translateY(0)" : "translateY(-150%)"
        }`,
      }}
      onMouseEnter={handleActiveNav}
      onMouseLeave={handleLeave}
    >
      <div className="flex gap-4 grow flex-wrap min-h-[300px] content-start">
        {dropDown.subCategories &&
          dropDown.subCategories.map((sub) => (
            
            <ul
              className="list-style-none text-left min-w-[178px] h-fit"
              style={{ flexGrow: `${dropDown.promo ? "0" : "1"}` }}
              key={uuid()}
            >
            
              <h3
                onClick={() =>
                  
                  navigate(
                    `/category/${dropDown.category
                      .replaceAll(" ", "_")
                      .toLocaleLowerCase()}/${sub.title
                      .replaceAll(" ", "_")
                      .toLocaleLowerCase()}`
                  )
                }
                className="cursor-pointer text-[18px] font-semibold"
              >
                {sub.title}
              </h3>
              <hr className="border-[3px] h-1.5 w-full mt-2 mb-4 bg-color-[#e7e7e7]" />
              {dropDown.options &&
                dropDown.options.map((option) => (
                  <li
                    onClick={() =>
                      navigate(
                        `/category/${dropDown.category
                          .replaceAll(" ", "_")
                          .toLocaleLowerCase()}/${sub.title
                          .replaceAll(" ", "_")
                          .toLocaleLowerCase()}/${option
                          .replaceAll(" ", "_")
                          .toLocaleLowerCase()}`
                      )
                    }
                    className="h-[31px] text-sm tracking-[0.1px] font-gothamLight cursor-pointer hover:font-gothamMedium hover:tracking-normal"
                    key={uuid()}
                  >
                    {option}
                  </li>
                ))}
            </ul>
          ))}
      </div>
      {dropDown.promo && (
        <div className="flex flex-col items-center min-w-[30%]">
          <img
            className="object-cover max-h-[100%]"
            src={dropDown.promo.image}
            alt=""
          />
          <h2 className="mt-4 font-gothamMedium text-2xl">
            {dropDown.promo.title}
          </h2>
        </div>
      )}
    </div>
  );
}
