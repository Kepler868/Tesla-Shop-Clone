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
