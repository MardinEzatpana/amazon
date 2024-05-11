import { Link, useLocation } from "react-router-dom";
import {
  saleImgOne,
  saleImgTwo,
  saleImgThree,
  saleImgFour,
} from "../../assets";

const Sale = () => {
  const location = useLocation();
  return (
    <div className="w-full pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <Link to="/shop" state={{ data: location.pathname.split("/")[1] }}>
            <img className="max-h-96 xl:max-h-full w-full object-cover" src={saleImgOne} />
          </Link>
          <Link to="/shop" state={{ data: location.pathname.split("/")[1] }}>
            <img className="max-h-96 xl:max-h-full w-full object-cover" src={saleImgFour} />
          </Link>
          <Link to="/shop" state={{ data: location.pathname.split("/")[1] }}>
            <img className="max-h-96 xl:max-h-full w-full object-cover" src={saleImgTwo} />
          </Link>
          <Link to="/shop" state={{ data: location.pathname.split("/")[1] }}>
            <img className="max-h-96 xl:max-h-full w-full object-cover" src={saleImgThree} />
          </Link>
    </div>
  );
};

export default Sale;
