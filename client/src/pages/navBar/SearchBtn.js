import React, { useRef, useState } from "react";

const SearchBtn = () => {
  const searchInput = useRef();
  const [activeSearch, setActiveSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleClickButton = () => {
    setActiveSearch(true);
    searchInput.current.focus();
  };

  const handleInputBlur = () => {
    setActiveSearch(false);
  };

  return (
    <div
      className="flex items-center rounded p-1 object-contain"
      style={{
        borderStyle: `${activeSearch ? "solid" : "none"}`,
        borderColor: `${activeSearch ? "[#d6d7d8]" : "inherit"}`,
        borderWidth: `${activeSearch ? "1px" : "0px"}`,
      }}
    >
      <input
        className="outline-none bg-transparent font-gothamMedium pl-1"
        style={{ width: `${activeSearch ? "180px" : "0px"}` }}
        onBlur={handleInputBlur}
        ref={searchInput}
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      
        <svg
          onClick={handleClickButton}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      
    </div>
  );
};

export default SearchBtn;
