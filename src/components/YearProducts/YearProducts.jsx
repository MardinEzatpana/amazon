import { Link, useLocation } from "react-router-dom";
import { productOfTheYear1, productOfTheYear2 } from "../../assets";

const YearProducts = () => {
  const location = useLocation();
  return (
    <>
      <div className="w-full pb-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/shop" state={{ data: location.pathname.split("/")[1] }}>
            <img className="max-h-96 xl:max-h-full w-full object-cover" src={productOfTheYear2} />
          </Link>
          <Link to="/shop" state={{ data: location.pathname.split("/")[1] }}>
            <img className="max-h-96 xl:max-h-full w-full object-cover" src={productOfTheYear1} />
          </Link>
    </div>
    </>
  );
};

export default YearProducts;
