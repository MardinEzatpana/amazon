import { priceList } from "../../../constants";
import NavTitle from "./NavTitle";

const Price = () => {
  
  return (
    <div className="cursor-pointer">
      <NavTitle title="خرید بر اساس قیمت" />
      <div className="font-titleFont">
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {priceList.map((item) => (
            <li dir="rtl"
              key={item._id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
            >
              {item.priceOne.toFixed(6)}تومان - {item.priceTwo.toFixed(6)}تومان
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Price;
