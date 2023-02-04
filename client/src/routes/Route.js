import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App.js";
import ShopPage from "../pages/shopPage/ShopPage.js";
import ItemsPage from "../pages/categories/ItemsPage.js";
import Cart from "../pages/cart/Cart.js";
import Checkout from "../pages/checkout/Checkout.js";
import Confirm from "../pages/checkout/Confirm.js";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ShopPage />} />
          <Route path="/category/:productCategory/" element={<ItemsPage />} />
          <Route
            path="/category/:productCategory/:subCategory"
            element={<ItemsPage />}
          />
          <Route
            path="/category/:productCategory/:subCategory/:option"
            element={<ItemsPage />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/checkout" element={<Checkout />} />
          <Route
            path="/cart/checkout/confirm"
            element={<Confirm />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
