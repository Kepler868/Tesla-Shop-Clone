"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.cartTotal = exports.cartQuantity = exports.resetCart = exports.getTotal = exports.updateQuantity = exports.removeItem = exports.addItem = exports.cartSelectors = exports.cartAdapter = void 0;

var _toolkit = require("@reduxjs/toolkit");

var cartAdapter = (0, _toolkit.createEntityAdapter)();
exports.cartAdapter = cartAdapter;
var cartSelectors = cartAdapter.getSelectors(function (state) {
  return state.cart.cartItems;
});
exports.cartSelectors = cartSelectors;
var initialState = window.sessionStorage.getItem("cart") ? JSON.parse(window.sessionStorage.getItem("cart")) : {
  cartItems: cartAdapter.getInitialState(),
  cartQuantity: 0,
  total: 0
};
var cartSlice = (0, _toolkit.createSlice)({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: function addItem(state, action) {
      var cartIds = cartAdapter.getSelectors().selectIds(state.cartItems);
      var cartEntities = cartAdapter.getSelectors().selectEntities(state.cartItems);
      var inCartId = "";
      cartIds.forEach(function (cartId) {
        if (cartEntities[cartId].itemName === action.payload.itemName) {
          inCartId = cartId;
        }
      });

      if (inCartId !== "") {
        var updated = JSON.parse(JSON.stringify(cartEntities[inCartId]));

        if (updated.quantity === 5) {
          alert("Reached Max Quantity on this Item");
        } else {
          updated.quantity++;
          cartAdapter.updateOne(state.cartItems, {
            id: inCartId,
            changes: updated
          });
          state.cartQuantity++;
        }
      } else {
        var productCopy = JSON.parse(JSON.stringify(action.payload));
        productCopy.id = (0, _toolkit.nanoid)();
        productCopy.quantity = 1;
        cartAdapter.addOne(state.cartItems, productCopy);
        state.cartQuantity++;
      }

      window.sessionStorage.setItem("cart", JSON.stringify(state));
    },
    removeItem: function removeItem(state, action) {
      var cartEntities = cartAdapter.getSelectors().selectEntities(state.cartItems);
      state.cartQuantity -= cartEntities[action.payload].quantity;
      cartAdapter.removeOne(state.cartItems, action.payload);
      window.sessionStorage.setItem("cart", JSON.stringify(state));
    },
    updateQuantity: function updateQuantity(state, _ref) {
      var _ref$payload = _ref.payload,
          cartId = _ref$payload.cartId,
          value = _ref$payload.value;
      var cartEnts = cartAdapter.getSelectors().selectEntities(state.cartItems);
      var oldQuantity = cartEnts[cartId].quantity;
      cartAdapter.updateOne(state.cartItems, {
        id: cartId,
        changes: {
          quantity: value
        }
      });
      var quantityChanged = value - oldQuantity;
      state.cartQuantity += quantityChanged;
      window.sessionStorage.setItem("cart", JSON.stringify(state));
    },
    getTotal: function getTotal(state, action) {
      var cartEnts = cartAdapter.getSelectors().selectEntities(state.cartItems);
      var total = 0;
      Object.values(cartEnts).forEach(function (item) {
        total += item.itemPrice * item.quantity;
      });
      state.total = total;
      window.sessionStorage.setItem("cart", JSON.stringify(state));
    },
    resetCart: function resetCart(state, action) {
      state.cartItems = cartAdapter.getInitialState();
      state.cartQuantity = 0;
      state.total = 0;
      sessionStorage.clear();
    }
  }
});
var _cartSlice$actions = cartSlice.actions,
    addItem = _cartSlice$actions.addItem,
    removeItem = _cartSlice$actions.removeItem,
    updateQuantity = _cartSlice$actions.updateQuantity,
    getTotal = _cartSlice$actions.getTotal,
    resetCart = _cartSlice$actions.resetCart;
exports.resetCart = resetCart;
exports.getTotal = getTotal;
exports.updateQuantity = updateQuantity;
exports.removeItem = removeItem;
exports.addItem = addItem;

var cartQuantity = function cartQuantity(state) {
  return state.cart.cartQuantity;
};

exports.cartQuantity = cartQuantity;

var cartTotal = function cartTotal(state) {
  return state.cart.total;
};

exports.cartTotal = cartTotal;
var _default = cartSlice.reducer;
exports["default"] = _default;