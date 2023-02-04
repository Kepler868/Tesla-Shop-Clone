import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cartSelectors,
  cartQuantity,
  getTotal,
  cartTotal,
} from "../../app/reducers/reducers";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartEntities = useSelector(cartSelectors.selectEntities);
  const cartIds = useSelector(cartSelectors.selectIds);
  const cartQty = useSelector(cartQuantity);
  const cartAll = useSelector(cartTotal);

  useEffect(() => {
    if (cartQty < 1) {
      navigate("/");
    }
    dispatch(getTotal());
  }, [cartQty, navigate, dispatch]);

  const cartItems = cartIds.map((cartId) => (
    <CartItem key={cartId} cartId={cartId} cartEntities={cartEntities} />
  ));
  return (
    <div className="max-w-screen pt-20 flex flex-col justify-center items-center mb-32">
      <div className="min-w-[580px]">
        <h1 className="self-start font-semibold text-3xl my-8">Cart</h1>
        <hr className="mb-10" />
        <div className="">{cartItems}</div>
        <hr className="my-10" />
        <div className="flex flex-col ">
          <h2 className="text-2xl mb-10">Order Summary</h2>
          <span className="flex justify-between mb-2 text-[#7d7e81]">
            <p>Shipping</p>
            <p>Calculated at Checkout</p>
          </span>
          <span className="flex justify-between item mb-10 text-[#7d7e81]">
            <p className="flex justify-center">
              Sales Tax{" "}
              <button className="h-[21px] w-[21px] border-2 border-[#7d7e81] rounded-full font-gothamBold ml-2 flex items-center justify-center ">
                <p className="">i</p>
              </button>
            </p>
            <p>Calculated at Checkout</p>
          </span>
          <span className="flex justify-between mb-8">
            <h2 className="text-3xl">Subtotal</h2>
            <h2 className="text-3xl ">${cartAll}</h2>
          </span>
        </div>
        <button
          onClick={() => navigate("/cart/checkout")}
          className="mt-10 w-full focus:bg-[#2955cd] bg-[#3d69e1] rounded py-2 text-white text-base font-semibold transition-all duration-500 outline-2 outline outline-transparent outline-offset-[-5px] focus:outline-white"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

/*

<div className="min-h-screen max-w-screen pt-20 pr-5 flex justify-center text-left overflow-x-hidden min-[960px]:pb-20">
      <div className="w-full max-w-[1100px] max-[960px]:p-4">
        <h1 className="mb-8 max-[960px]:w-full max-[960px]:max-w-[580px] max-[960px]:m-auto max-[960px]:mb-8">
          Cart
        </h1>
        <div className="flex justify-between gap-8 max-[960px]:flex-col max-[960px]:items-center max-[960px]:max-w-[580px] max-[960px]:m-auto">
          <div className="grow max-w-[540px] pt-8 max-[960px]:border-y max-[960px]:border-y-[#cccccc] max-[960px]:w-full ">
            {cartItems}
          </div>
          <div className=" rounded bg-white h-fit flex flex-col gap-8 shadow-lg max-[960px]:shadow-none">
            <h2 className="flex max-[960px]:w-full max-[960px]:shadow-none">
              Order Summary
            </h2>
            <p className="flex">
              Shipping{" "}
              <span className="block ml-auto">Calculated at Checkout</span>
            </p>
            <p>
              Sales Tax
              
              <span className="block ml-auto">Calculated at Checkout</span>
            </p>
            <h2 className="flex max-[960px]:w-full max-[960px]:shadow-none">
              Subtotal <span className="block ml-auto">${cartAll}</span>
            </h2>
            <button
              className="orderCheckoutButton"
              onClick={() => navigate("checkout")}
            >
              Checkout
            </button>
          </div>
          <div className="min-[960px]:hidden">
            <Footer className="min-" />
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 p-5 bg-white shadow-lg w-full grid place-items-center min-[960px]:hidden">
        <button
          className="checkoutButton"
          onClick={() => navigate("/checkout")}
        >
          CHECKOUT
        </button>
      </div>
    </div>



div className="min-h-screen max-w-screen pt-20 pr-5 flex justify-center text-left overflow-x-hidden min-[960px]:pb-20">
      <div className="w-full max-w-[1100px] max-[960px]:p-4">
        <h1 className="mb-8 max-[960px]:w-full max-[960px]:max-w-[580px] max-[960px]:m-auto max-[960px]:mb-8">
          Cart
        </h1>
        <div className="flex justify-between gap-8 max-[960px]:flex-column max-[960px]:items-center max-[960px]:max-w-[580px] max-[960px]:m-auto">
          <div className="grow max-w-[540px] pt-8 max-[960px]:border-y max-[960px]:border-y-[#cccccc] max-[960px]:w-full max-[960px]:max-w-full">
            {cartItems}
          </div>
          <div className="p-8 w-[430px] rounded bg-white h-fit flex flex-col gap-8 shadow-lg">
            <h2 className="flex max-[960px]:w-full max-[960px]:shadow-none">
              Order Summary
            </h2>
            <p className="flex">
              Shipping{" "}
              <span className="block ml-auto">Calculated at Checkout</span>
            </p>
            <p>
              Sales Tax
              <button className="bg-none h-8 w-8 rounded-[50%] font-gothamBold ml-2 flex items-center justify-center ">
                <p>i</p>
              </button>
              <span className="block ml-auto">Calculated at Checkout</span>
            </p>
            <h2 className="flex max-[960px]:w-full max-[960px]:shadow-none">
              Subtotal <span className="block ml-auto">${cartAll}</span>
            </h2>
            <button
              className="orderCheckoutButton"
              onClick={() => navigate("checkout")}
            >
              Checkout
            </button>
          </div>
          <div className="min-[960px]:hidden">
            <Footer className="min-" />
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 p-5 bg-white shadow-lg w-full grid place-items-center min-[960px]:hidden">
        <button
          className="checkoutButton"
          onClick={() => navigate("/checkout")}
        >
          CHECKOUT
        </button>
      </div>
    </div>







import React from "react";
import { useSelector } from "react-redux";
import { cartTotal } from "../../app/reducers/reducers";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const cartAll = useSelector(cartTotal);
  const navigate = useNavigate();
  return (
    <div className="p-8 w-[430px] rounded bg-white h-fit flex flex-col gap-8 shadow-lg">
      <h2 className="flex max-[960px]:w-full max-[960px]:shadow-none">
        Order Summary
      </h2>
      <p className="flex">
        Shipping <span className="block ml-auto">Calculated at Checkout</span>
      </p>
      <p>
        Sales Tax
        <button className="bg-none h-8 w-8 rounded-[50%] font-gothamBold ml-2 flex items-center justify-center ">
          <p>i</p>
        </button>
        <span className="block ml-auto">Calculated at Checkout</span>
      </p>
      <h2 className="flex max-[960px]:w-full max-[960px]:shadow-none">
        Subtotal <span className="block ml-auto">${cartAll}</span>
      </h2>
      <button className="orderCheckoutButton" onClick={() => navigate("checkout")}>
        Checkout
      </button>
    </div>
  );
};

export default OrderSummary; */
