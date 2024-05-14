/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/home";
import Shop from "../pages/Shop/Shop";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Offer from "../pages/Offer/Offer";
import About from "../pages/About/About";
import SignUp from "../pages/Auth/SignUp";
import SignIn from "../pages/Auth/SignIn";
import { useSelector } from "react-redux";
import Contact from "../pages/Contact/Contact";

const ProtectedRoute = ({ children }) => {
  const { authUser } = useSelector((state) => state.user.user);
  if (!authUser) {
    return children;
  }
  return <Navigate to="/" />;
};


export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/product/:_id" element={<ProductDetails />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/offer" element={<Offer />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
        <Route
        path="/signup"
        element={
          <ProtectedRoute>
            <SignUp />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/signin"
        element={
          <ProtectedRoute>
            <SignIn />
          </ProtectedRoute>
        }
      ></Route>
      </Route>
    )
  );