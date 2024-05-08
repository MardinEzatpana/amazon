import { Outlet, ScrollRestoration } from "react-router-dom";
import SpecialCase from "../components/SpecialCase/SpecialCase";
import Header from "../components/common/Header/Header";
import HeaderBottom from "../components/common/Header/HeaderBottom";

const Layout = () => {
    return (
      <div>
        <Header />
        <HeaderBottom />
        <SpecialCase />
        <ScrollRestoration />
        <Outlet />
      </div>
    );
  };

  export default Layout