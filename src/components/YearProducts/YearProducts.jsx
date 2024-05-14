import { Link, useLocation } from "react-router-dom";
import { productOfTheYear1, productOfTheYear2, productOfTheYear3, productOfTheYear4 } from "../../assets";

const YearProducts = () => {
  const location = useLocation();
  return (
    <>
      <div className="w-full pb-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/shop" state={{ data: location.pathname.split("/")[1] }}>
            <img className="max-h-60 xl:max-h-full w-full object-cover" src={productOfTheYear2} />
          </Link>
          <Link to="/shop" state={{ data: location.pathname.split("/")[1] }}>
            <img className="max-h-60  xl:max-h-full w-full object-cover" src={productOfTheYear1} />
          </Link>
          <Link to="/shop" state={{ data: location.pathname.split("/")[1] }}>
            <img className="max-h-60  xl:max-h-full w-full object-cover" src={productOfTheYear3} />
          </Link>
          <Link to="/shop" state={{ data: location.pathname.split("/")[1] }}>
            <img className="max-h-60  xl:max-h-full w-full object-cover" src={productOfTheYear4} />
          </Link>
    </div>
    </>
  );
};

export default YearProducts;
