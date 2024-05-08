import { MdLocalShipping } from "react-icons/md";
import { FaAward } from "react-icons/fa";
import { CgRedo } from "react-icons/cg";

const BannerBottom = () => {
  return (
    <div className="w-full bg-white border-b-[1px] py-4 border-b-gray-200 px-4">
      <div className="max-w-container mx-auto h-20 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-xl text-center w-6 ml-1">
            <FaAward color="#414040"/>
          </span>
          <p className="text-lightText text-base">تضمین دو ساله</p>
        </div>
        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-xl text-center w-6 ml-1">
            <MdLocalShipping color="#414040"/>
          </span>
          <p className="text-lightText text-base">ارسال رایگان</p>
        </div>
        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-2xl text-center w-6">
            <CgRedo color="#414040"/>
          </span>
          <p className="text-lightText text-base">بیمه نامه بازگشت تا 30 روز</p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
