import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/home";
import Shop from "../pages/Shop/Shop";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/product/:_id" element={<ProductDetails />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Route>
      </Route>
    )
  );