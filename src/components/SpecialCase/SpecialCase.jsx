import { Link } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { MdSwitchAccount } from "react-icons/md";

const SpecialCase = () => {
  return (
    <div className="fixed top-52 left-2 z-20 hidden lg:flex flex-col gap-2">
      <Link to="#">
        <div className="bg-[#232f3e] w-16 h-[70px] rounded-md flex flex-col gap-1 text-white justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer">
          <div className="flex justify-center items-center">
            <MdSwitchAccount className="text-2xl translate-x-12 group-hover:-translate-x-3 transition-transform duration-200" />

            <MdSwitchAccount className="text-2xl translate-x-3 group-hover:-translate-x-12 transition-transform duration-200" />
          </div>
          <p className="text-xs font-semibold font-titleFont">پروفایل</p>
        </div>
      </Link>
      <Link to="#">
        <div className="bg-[#232f3e] w-16 h-[70px] rounded-md flex flex-col gap-1 text-white justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer relative">
          <div className="flex justify-center items-center">
            <RiShoppingCart2Fill className="text-2xl translate-x-12 group-hover:-translate-x-3 transition-transform duration-200" />

            <RiShoppingCart2Fill className="text-2xl translate-x-3 group-hover:-translate-x-12 transition-transform duration-200" />
          </div>
          <p className="text-xs font-semibold font-titleFont">الان بخر</p>
            <p className="absolute top-1 right-2 bg-transparent text-orange-500 text-md w-4 h-4 rounded-full flex items-center justify-center font-semibold">
              1
            </p>
        </div>
      </Link>
    </div>
  );
};

export default SpecialCase;
