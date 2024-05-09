import { Outlet, ScrollRestoration } from "react-router-dom";
import SpecialCase from "../components/SpecialCase/SpecialCase";
import Header from "../components/common/Header/Header";
import HeaderBottom from "../components/common/Header/HeaderBottom";
import Footer from "../components/common/Footer/Footer";
import FooterBottom from "../components/common/Footer/FooterBottom";

const Layout = () => {
    return (
      <div>
        <Header />
        <HeaderBottom />
        <SpecialCase />
        <ScrollRestoration />
        <Outlet />
        <Footer />
        <FooterBottom />
      </div>
    );
  };

  export default Layout