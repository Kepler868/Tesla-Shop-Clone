import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [valid, setValid] = useState(false);

  const validateEmail = () => {
    let regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (input.length) {
      setValid(regexp.test(String(input).toLocaleLowerCase()));
      return true;
    }
    setValid(false);
    return false;
  };
  return (
    <div className="pt-40 max-w-sm m-auto min-h-[90vh] text-left">
      <div className="flex flex-col gap-7">
        <h1 className="text-2xl font-gothamMedium">Sign In</h1>
        <p className="flex items-center font-gothamMedium text-[#7d7e81] w-80">
          Email Address
          <button className="cursor-pointer font-gothamMedium bg-[#3e6ae1] h-5 w-5 flex items-center justify-center text-white rounded-full text-xs border-none ml-2">
            i
          </button>
        </p>

        <input
          className={
            "w-full px-4 py-3 bg-[#eeeeee] outline-[#eeeeee]  focus:outline focus:outline-[#d0d1d2] transition-all duration-500 font-semibold rounded"
          }
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onBlur={validateEmail}
        />

        <button
          className="focus:bg-[#2955cd] bg-[#3d69e1] rounded py-2 text-white text-base font-semibold transition-all duration-500 outline-2 outline outline-transparent outline-offset-[-5px] focus:outline-white"
          onClick={() => {
            validateEmail() && navigate("confirm");
          }}
        >
          Continue
        </button>
        <div className=" text-gray-500 flex items-center justify-center gap-2 text-base">
          <p className=" text-sm border-b border-b-gray-600 leading-4">
            Forgot email?
          </p>
          <hr className="bg-gray-500 h-4 w-[1px]  border-none opacity-100" />
          <p className=" text-sm border-b border-b-gray-600 leading-4">
            Forgot Password?
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full my-10">
        <hr className="bg-gray-700 w-1/2" />
        <p className="text-sm font-gothamMedium text-gray-500 p-3">OR</p>
        <hr className="bg-gray-700 w-1/2" />
      </div>

      <div>
        <h1 className="font-gothamMedium text-3xl">Guest Checkout</h1>
        <p className="text-sm font-semibold text-gray-600 mt-3">
          You'll have the opportunity to create an account after you complete
          checkout.
        </p>
        <button
          className="font-semibold w-full border-[3px] bg-transparent border-black rounded-[5px] mt-5 py-1 transition-all ease-in-out duration-500 hover:bg-black hover:text-white "
          onClick={() => navigate("confirm")}
        >
          Continue as Guest
        </button>
      </div>
    </div>
  );
};

export default Checkout;
