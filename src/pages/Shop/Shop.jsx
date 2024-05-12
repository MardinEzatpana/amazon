import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ShopSideNav from "../../components/shop/ShopSideNav";
import { useEffect, useState } from "react";
import ProductBanner from "../../components/shop/ProductBanner";
import Pagination from "../../components/shop/Pagination";

const Shop = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };
  useEffect(() => {
    setPrevLocation(location.state?.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="محصولات" prevLocation={prevLocation} />
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lg:w-[25%] hidden md:inline-flex h-full">
          <ShopSideNav />
        </div>
        <div className="w-full md:w-[80%] lg:w-[75%] h-full">
          <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} />
          <Pagination itemsPerPage={itemsPerPage} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
