import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  cartSelectors,
  cartQuantity,
  cartTotal,
  resetCart,
} from "../../app/reducers/reducers";
import { useNavigate } from "react-router-dom";

const Confirm = () => {
  const cartEntities = useSelector(cartSelectors.selectEntities);
  const cartIds = useSelector(cartSelectors.selectIds);
  const cartQty = useSelector(cartQuantity);
  const cartTtl = useSelector(cartTotal);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [confirm, setConfirm] = useState(false);
  const [toId, setToId] = useState();

  useEffect(() => {
    if (confirm) {
      dispatch(resetCart());
      const timer = setTimeout(() => {
        navigate("/");
      }, 3000);
      setToId(timer);
    }
    return () => clearTimeout(toId);
  }, [confirm, navigate]);

  return (
    <>
      {!confirm ? (
        <div className="rounded  flex flex-col  min-h-[90vh] justify-center m-auto max-w-lg">
          <h1 className="pt-32 self-center text-3xl font-gothamMedium">
            Confirm Order
          </h1>
          <hr className="w-full bg-black mt-4" />
          <li className="font-semibold mt-4 mb-3 list-none flex relative w-full">
            <p className="absolute left-20">Item</p>
            <p className="absolute right-32">Quantity</p>
            <p className="absolute right-4">Price</p>
          </li>
          <hr className="w-full bg-black mt-6" />

          <ul className="mt-8">
            {cartIds.map((id) => (
              <div key={id}>
                <li className="relative flex justify-between ">
                  <p className="max-w-[50%] font-semibold">
                    {cartEntities[id].itemName}
                  </p>
                  <p className="absolute right-40">
                    {cartEntities[id].quantity}
                  </p>
                  <p className="font-gothamBold">
                    $
                    {(
                      cartEntities[id].itemPrice * cartEntities[id].quantity
                    ).toFixed(2)}
                  </p>
                </li>
                <hr className="w-full bg-black my-5" />
              </div>
            ))}
          </ul>

          <div className="text-gray-600 flex flex-col">
            <span className="flex justify-between mb-5 ">
              <h3>Total Items</h3>
              <p className="font-gothamBold">{cartQty}</p>
            </span>
            <span className="flex justify-between mb-5 ">
              <p>Sub Total</p>
              <p className="font-gothamBold">${cartTtl.toFixed(2)}</p>
            </span>
            <span className="flex justify-between mb-5">
              <p>Tax</p>
              <p className="font-gothamBold">${(cartTtl * 0.035).toFixed(2)}</p>
            </span>
          </div>
          <div className=" flex justify-between">
            <p className="mt-4 text-2xl font-gothamMedium">Total price</p>
            <p className="text-2xl font-gothamBold">
              ${(cartTtl + cartTtl * 0.035).toFixed(2)}
            </p>
          </div>

          <button
            className="focus:bg-[#2955cd] bg-[#3d69e1] rounded py-2 text-white text-base font-semibold transition-all duration-500 outline-2 outline outline-transparent outline-offset-[-5px] focus:outline-white mt-8"
            onClick={() => setConfirm(true)}
          >
            Confirm
          </button>
        </div>
      ) : (
        <div className="fixed h-screen w-screen flex flex-col justify-center items-center bg-white">
          <h1 className="mb-10">Your order has been accepted</h1>
          <p>just for test</p>
        </div>
      )}
    </>
  );
};

export default Confirm;
