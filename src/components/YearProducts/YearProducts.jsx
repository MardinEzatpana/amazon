import { Link } from "react-router-dom";
import { productOfTheYear1, productOfTheYear2 } from "../../assets";

const YearProducts = () => {
  return (
    <>
      <div className="w-full pb-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="#">
            <img className="max-h-96 xl:max-h-full w-full object-cover" src={productOfTheYear2} />
          </Link>
          <Link to="#">
            <img className="max-h-96 xl:max-h-full w-full object-cover" src={productOfTheYear1} />
          </Link>
    </div>
    </>
  );
};

export default YearProducts;
