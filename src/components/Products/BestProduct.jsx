/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const BestProduct = (props) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="max-w-40 lg:max-w-80 max-h-40 lg:max-h-80 relative overflow-y-hidden">
        <Link to="#">
          <img
            className="w-full h-full rounded-full border-[1px]"
            src={props.img}
          />
        </Link>
      </div> 
      <div
        dir="rtl"
        className="max-w-80 max-h-16 lg:max-h-24 py-3 flex flex-col gap-1 border-[1px] border-r-0 px-4"
      >
        <h2 className="text-sm text-primeColor font-bold">
          {props.productName}
        </h2>
        <p dir="rtl" className="text-[#767676] text-[14px]">
          {props.price}
          <span className="mr-1">تومان</span>
        </p>
      </div> 
    </div>
  );
};

export default BestProduct;
