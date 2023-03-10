import { createSlice, createEntityAdapter, nanoid } from "@reduxjs/toolkit";

export const cartAdapter = createEntityAdapter();
export const cartSelectors = cartAdapter.getSelectors(
  (state) => state.cart.cartItems
);

const initialState = window.sessionStorage.getItem("cart")
  ? JSON.parse(window.sessionStorage.getItem("cart"))
  : {
      cartItems: cartAdapter.getInitialState(),
      cartQuantity: 0,
      total: 0,
    };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      let cartIds = cartAdapter.getSelectors().selectIds(state.cartItems);
      let cartEntities = cartAdapter
        .getSelectors()
        .selectEntities(state.cartItems);
      let inCartId = "";

      cartIds.forEach((cartId) => {
        if (cartEntities[cartId].itemName === action.payload.itemName) {
          inCartId = cartId;
        }
      });

      if (inCartId !== "") {
        let updated = JSON.parse(JSON.stringify(cartEntities[inCartId]));
        if (updated.quantity === 5) {
          alert("Reached Max Quantity on this Item");
        } else {
          updated.quantity++;
          cartAdapter.updateOne(state.cartItems, {
            id: inCartId,
            changes: updated,
          });
          state.cartQuantity++;
        }
      } else {
        const productCopy = JSON.parse(JSON.stringify(action.payload));

        productCopy.id = nanoid();
        productCopy.quantity = 1;
        cartAdapter.addOne(state.cartItems, productCopy);
        state.cartQuantity++;
      }
      window.sessionStorage.setItem("cart", JSON.stringify(state));
    },
    removeItem: (state, action) => {
      let cartEntities = cartAdapter
        .getSelectors()
        .selectEntities(state.cartItems);

      state.cartQuantity -= cartEntities[action.payload].quantity;
      cartAdapter.removeOne(state.cartItems, action.payload);
      window.sessionStorage.setItem("cart", JSON.stringify(state));
    },
    updateQuantity: (state, { payload: { cartId, value } }) => {
      let cartEnts = cartAdapter.getSelectors().selectEntities(state.cartItems);
      let oldQuantity = cartEnts[cartId].quantity;
      cartAdapter.updateOne(state.cartItems, {
        id: cartId,
        changes: { quantity: value },
      });
      let quantityChanged = value - oldQuantity;
      state.cartQuantity += quantityChanged;
      window.sessionStorage.setItem("cart", JSON.stringify(state));
    },
    getTotal: (state, action) => {
      let cartEnts = cartAdapter.getSelectors().selectEntities(state.cartItems);
      let total = 0;
      Object.values(cartEnts).forEach((item) => {
        total += item.itemPrice * item.quantity;
      });
      state.total = total;
      window.sessionStorage.setItem("cart", JSON.stringify(state));
    },
    resetCart: (state, action) => {
      state.cartItems = cartAdapter.getInitialState();
      state.cartQuantity = 0;
      state.total = 0;
      sessionStorage.clear();
    },
  },
});

export const { addItem, removeItem, updateQuantity, getTotal, resetCart } =
  cartSlice.actions;
export const cartQuantity = (state) => state.cart.cartQuantity;
export const cartTotal = (state) => state.cart.total;

export default cartSlice.reducer;
