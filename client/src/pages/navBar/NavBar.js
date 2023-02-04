import React, { createRef, useEffect, useState, useRef } from "react";
import { navList } from "./navData";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import NavSideMenu from "./NavSideMenu";
import TeslaLogo from "../../assets/images/SideBar/TeslaLogo";
import SearchBtn from "./SearchBtn";
import CartBtn from "./CartBtn";
import DropDown from "./DropDown";
import Shadow from "./Shadow";


const NavBar = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const navRefs = useRef(navList.map(() => createRef()));
  const [dropDown, setDropDown] = useState({});
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [activeNav, setActiveNav] = useState(false);
  const [indicator, setIndicator] = useState({});
  const [initialHover, setInitialHover] = useState(false);
  const [activeDrop, setActiveDrop] = useState(false);

  const handleMenuActive = () => {
    setShowSideMenu(true);
    setDropDown({});
  };

  const handleActiveNav = () => {
    setActiveNav(true);
  };

  const handleDisableNav = () => {
    if (
      activeDrop === false &&
      showSideMenu === false &&
      window.pageYOffset < 200 &&
      location.pathname === "/"
    ) {
      setActiveNav(false);
      setInitialHover(false);
      setIndicator({ height: 0, width: 0, posY: 0, posX: 0, initial: false });
    }
  };
  const handleEnter = (ref, item) => {
    setActiveDrop(true);
    if (initialHover) {
      setIndicator({
        height: ref.offsetHeight,
        width: ref.offsetWidth,
        posY: ref.offsetTop,
        posX: ref.offsetLeft - 4,
        initial: true,
      });
      if (item) {
        setDropDown(item);
      } else {
        setDropDown({});
      }
    } else {
      setIndicator({
        height: ref.offsetHeight,
        width: ref.offsetWidth,
        posY: ref.offsetTop,
        posX: ref.offsetLeft - 4,
        initial: false,
      });
      setInitialHover(true);
      if (item) {
        setDropDown(item);
      } else {
        setDropDown({});
      }
    }
  };

  const handleLeave = () => {
    setDropDown({});
    if (window.pageYOffset < 200 && location.pathname === "/") {
      setActiveNav(false);
    }
    setActiveDrop(false);
    setInitialHover(false);
    setIndicator({
      height: 0,
      width: 0,
      posY: 0,
      posX: 0,
      initial: false,
    });
  };

  useEffect(() => {
    if (location.pathname === "/") {
      window.scrollTo(0, 0);
    }
    window.onscroll = () => {
      if (
        activeDrop === false &&
        showSideMenu === false &&
        location.pathname === "/"
      ) {
        if (window.pageYOffset > 200) {
          setActiveNav(true);
        } else if (window.pageYOffset < 200) {
          setActiveNav(false);
        }
      } else {
        setActiveNav(true);
      }
    };
    return () => {
      window.onscroll = null;
    };
  }, [params, location.pathname]);

  return (
    <div>
      <NavSideMenu
        showSideMenu={showSideMenu}
        setShowSideMenu={setShowSideMenu}
        navList={navList}
        setActiveNav={setActiveNav}
        setInitialHover={setInitialHover}
        setIndicator={setIndicator}
      />
      <DropDown dropDown={dropDown} handleLeave={handleLeave} />

      <div
        onMouseEnter={handleActiveNav}
        onMouseLeave={handleDisableNav}
        className="flex fixed justify-between items-center p-[5px] h-16 top-0 z-20 w-full pointer-events-auto flex-wrap transition-all duration-100"
        style={{
          color: `${activeNav ? "black" : "white"}`,
          backgroundColor: `${activeNav ? "white" : "transparent"}`,
        }}
      >
        <Shadow setting={indicator} />
        <ul className="flex items-center list-none pr-4 gap-4 ">
          <TeslaLogo onClick={() => navigate("/")} />
          <hr
            className={
              (activeNav ? "border border-black " : "border border-white ") +
              "h-4 mx-3 "
            }
          />
          <li
            className="rounded-[5px] p-2 cursor-pointer pointer-events-auto text-sm font-semibold hover:bg-[#e9e9e9] transition-all duration-200 active:transition-none active:outline-dashed active:outline-offset-2 active:outline-1 active:outline-gray-500"
            onClick={() => navigate("/")}
          >
            Shop
          </li>
        </ul>
        <ul className="flex items-center list-none pr-4 gap-4 max-[1200px]:hidden">
          {navList.map((listItem, index) => (
            <li
              key={index}
              ref={navRefs.current[index]}
              className="rounded-[5px]  p-2 px-2.5 cursor-pointer pointer-events-auto text-sm font-semibold active:transition-none active:outline-dashed active:outline-offset-[-8px] active:active:outline-1 active:outline-gray-500"
              onMouseEnter={() =>
                handleEnter(navRefs.current[index].current, listItem)
              }
              onClick={() =>
                navigate(
                  `category/${listItem.category
                    .replaceAll(" ", "_")
                    .toLocaleLowerCase()}`
                )
              }
            >
              {listItem.category}
            </li>
          ))}
        </ul>
        <ul className="flex items-center list-none pr-2 gap-4 ">
          <li className="rounded  pr-2.5 cursor-pointer pointer-events-auto text-sm font-semibold max-[1200px]:hidden">
            <SearchBtn />
          </li>
          <li
            onClick={() => navigate("/cart")}
            className="rounded mr-2.5 cursor-pointer pointer-events-auto text-sm font-semibold active:transition-none active:outline-dashed active:outline-offset-2 active:outline-1 active:outline-gray-500"
          >
            <CartBtn />
          </li>
          <li
            onClick={handleMenuActive}
            className="rounded-[5px] p-2 cursor-pointer pointer-events-auto text-sm font-semibold hover:bg-[#e9e9e9] transition-all duration-200 active:transition-none active:outline-dashed active:outline-offset-2 active:outline-1 active:outline-gray-500"
          >
            Menu
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
