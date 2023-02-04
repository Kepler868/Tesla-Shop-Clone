import React, { useState, useRef } from "react";
import arrow from "../../assets/images/SideBar/arrow.svg";
import exitButton from "../../assets/images/SideBar/x-button.svg";
import globus from "../../assets/images/SideBar/globe.svg";
import { useLocation, useNavigate } from "react-router-dom";
import SearchBtn from "./SearchBtn";
import uuid from "react-uuid";

const NavSideMenu = ({
  setShowSideMenu,
  showSideMenu,
  navList,
  setActiveNav,
  setInitialHover,
  setIndicator,
}) => {
  const searchRef = useRef();
  const location = useLocation();
  const [inputValue, setInputValue] = useState("");
  const [showSubCategories, setShowSubCategories] = useState(false);
  const [navUrl, setNavUrl] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const navigate = useNavigate();

  const handleClose = () => {
    setNavUrl("/");
    setShowSideMenu(false);
    setShowSubCategories(false);
    setSubCategories([]);
    setInitialHover(false);
    setIndicator({ height: 0, width: 0, posY: 0, posX: 0, initial: false });
    if (window.pageYOffset < 200 && location.pathname === "/") {
      setActiveNav(false);
    }
  };

  const handleCategorySelect = (listItem) => {
    setSubCategories(listItem);
    setShowSubCategories(true);
    setNavUrl(listItem.category);
  };

  const mainNavLinks = navList.map((listItem, i) => (
    <li
      className="text-left rounded text-sm font-gothamMedium p-2 py-3 flex items-center hover:bg-[#EDEDED] transition-all duration-500 active:transition-none active:outline-dashed active:outline-offset-2 active:outline-1"
      key={i}
      onClick={() => handleCategorySelect(listItem)}
    >
      {listItem.category}
      <img
        className="ml-auto h-full"
        style={{ transform: "rotate(-90deg)" }}
        src={arrow}
        alt=""
      />
    </li>
  ));

  return (
    <div
      className="fixed z-30 overflow-hidden h-screen w-screen top-0 bottom-0 "
      style={{
        pointerEvents: `${showSideMenu ? "auto" : "none"}`,
        backdropFilter: `${showSideMenu ? "blur(4px)" : "none"}`,
      }}
    >
      <div
        onClick={handleClose}
        className=" h-screen w-screen bg-black opacity-20 fixed top-0 "
        style={{ display: `${showSideMenu ? "block" : "none"}` }}
      ></div>
      <div
        className=" flex flex-col bg-white max-w-[420px] w-[90vw] h-screen absolute right-0  transition-all duration-300 px-8 pt-4 overflow-y-scroll"
        style={{
          transform: `${showSideMenu ? "translateX(0%)" : "translateX(100%)"}`,
        }}
      >
        <button
          className="flex items-center bg-none border-none absolute text-sm"
          style={{ display: `${showSubCategories ? "flex" : "none"}` }}
          onClick={() => setShowSubCategories(false)}
        >
          <img className="mr-1 rotate-90" src={arrow} alt="" />
          <p>Back</p>
        </button>
        <button
          className=" absolute top-4 right-8 w-fit p-1 mb-5 self-end justify-end rounded border-none bg-none grid place-items-center hover:bg-[#EDEDED]"
          onClick={handleClose}
        >
          <img src={exitButton} alt="" />
        </button>

        {showSubCategories ? (
          <ul className="mt-10 list-none ">
            <h1 className="text-left mb-5 font-gothamMedium text-2xl">
              {subCategories.category}
            </h1>
            <div>
              {subCategories.subCategories.map((sub) => (
                <li
                  key={uuid()}
                  className="flex flex-col justify-center items-center mb-5 cursor-pointer active:transition-none active:outline-dashed active:outline-offset-2 active:outline-1 active:rounded"
                  onClick={() => {
                    setShowSideMenu(false);
                    setShowSubCategories(false);
                    navigate(
                      `category/${navUrl
                        .toLocaleLowerCase()
                        .replaceAll(" ", "_")}`
                    );
                  }}
                >
                  <img
                    className="w-full max-h-[160px] object-cover rounded mb-4 bg-[#EDEDED]"
                    src={sub.image}
                    alt=""
                  />
                  <h2 className="text-xl font-gothamMedium">{sub.title}</h2>
                </li>
              ))}
            </div>
            <button className="mb-10 w-full border-[3px] bg-transparent border-black rounded mt-5 p-1 transition-all ease-in-out duration-500 hover:bg-black hover:text-white active:duration-100 active:outline active:outline-offset-[-5px] active:outline-2 active:outline-white">
              View All
            </button>
          </ul>
        ) : (
          <>
            <div className=" mt-10 mb-1 min-[1200px]:hidden">
              <div className="bg-[#F5F5F5] flex  rounded items-center mb-2 text-[#393C41]">
                <button
                  className="bg-none borded-none"
                  onClick={() => searchRef.current.focus()}
                >
                  <SearchBtn fill="black" />
                </button>
                <input
                  className="font-gothamMedium text-base  grow bg-[#F5F5F5] border-none outline-none"
                  placeholder="Search"
                  ref={searchRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </div>
              <ul className="list-none mb-2 flex flex-col gap-1 ">
                {mainNavLinks}
              </ul>
            </div>
            <div>
              <ul className="list-none min-[1200px]:mt-10">
                <li className="text-left text-sm font-gothamMedium p-2 mb-3 rounded hover:bg-[#EDEDED] transition-all duration-500 active:transition-none active:outline-dashed active:outline-offset-2 active:outline-1">
                  Shop FAQ
                </li>
                <li className="text-left text-sm font-gothamMedium p-2 mb-3 rounded  hover:bg-[#EDEDED] transition-all duration-500 active:transition-none active:outline-dashed active:outline-offset-2 active:outline-1">
                  Sign In
                </li>
                <li className="text-left p-2  rounded mb-5 hover:bg-[#EDEDED] flex items-start transition-all duration-500 active:transition-none active:outline-dashed active:outline-offset-2 active:outline-1">
                  <img className="mr-4" src={globus} alt="" />
                  <div>
                    <b>United States</b>
                    <p>English</p>
                  </div>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavSideMenu;
