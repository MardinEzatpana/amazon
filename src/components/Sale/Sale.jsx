import { Link } from "react-router-dom";
import {
  saleImgOne,
  saleImgTwo,
  saleImgThree,
  saleImgFour,
} from "../../assets";

const Sale = () => {
  return (
    <div className="pb-10 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <div className="w-full md:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
          <Link to="#">
            <img className="max-h-80 md:max-h-full w-full object-cover" src={saleImgOne} />
          </Link>
          <Link to="#">
            <img className="max-h-80 md:max-h-full w-full object-cover" src={saleImgFour} />
          </Link>
      </div>
      <div className="w-full md:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
          <Link to="#">
            <img className="max-h-80 md:max-h-full w-full object-cover" src={saleImgTwo} />
          </Link>
          <Link to="#">
            <img className="max-h-80 md:max-h-full w-full object-cover" src={saleImgThree} />
          </Link>
      </div>
    </div>
  );
};

export default Sale;
