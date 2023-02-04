import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateQuantity, removeItem} from "../../app/reducers/reducers";
import QuantitySelector from "./QuantitySelector";

const CartItem = ({ cartId, cartEntities }) => {
  const [itemQty, setItemQty] = useState(cartEntities[cartId].quantity);
  const dispatch = useDispatch();

  function handleSelect(qty) {
    dispatch(updateQuantity({ cartId, value: qty }));
    setItemQty(qty);
  }
  return (
    <div className="flex mt-8">
      <img
        className="h-[90px] w-[90px] mr-5"
        src={cartEntities[cartId].itemImg}
        alt=""
      />
      <div className="text-sm  flex flex-col ">
        <h3 className="text-lg">{cartEntities[cartId].itemName}</h3>
        <p className="font-gothamLight">Options go Here</p>
        <div className="flex items-center flex-wrap font-gothamLight">
          Quantity:
          <span>
            <QuantitySelector handleSelect={handleSelect} itemQty={itemQty} />
          </span>
          <span
            onClick={() => dispatch(removeItem(cartId))}
            className="ml-4 border-b-2 cursor-pointer"
          >
            Remove
          </span>
        </div>
      </div>
      <h3 className="ml-auto font-gothamMedium">${cartEntities[cartId].itemPrice}</h3>
    </div>
  );
};

export default CartItem;
