import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const HeaderBottom = () => {
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);
  return (
    <div className="w-full bg-[#F5F5F3] relative">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full px-4 pb-4 md:pb-0 h-full md:h-24">
          <div
          onClick={() => setShow(!show)}
           className="flex h-14 cursor-pointer items-center gap-2 text-primeColor">
            <HiOutlineMenuAlt4 className="w-5 h-5" />
            <p className="text-[14px] font-normal">خرید بر اساس دسته بندی</p>
            {show && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-36 lg:top-24 z-50 bg-primeColor w-auto text-[#767676] h-auto p-4 pb-6"
              >
                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                محصولات جدید
                </li>
                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                تجهیزات جانبی
                </li>
                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                لوازم الکترونیک
                </li>
                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                ابزارک ها
                </li>
                <li className="text-gray-400 px-4 py-1 hover:text-white duration-300 cursor-pointer">
                بیشتر...
                </li>
              </motion.ul>
            )}
          </div>
          <div className="relative w-full md:w-[400px] lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
            <input
              className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
              type="text"
              placeholder="جستجوی محصولات ..."
            />
            <FaSearch className="w-5 h-5" />
          </div>
          <div className="flex gap-4 mt-2 lg:mt-0 items-center pl-6 cursor-pointer relative">
          <div onClick={() => setShowUser(!showUser)} className="flex">
              <FaCaretDown />
              <FaUser />
            </div>
            {showUser && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-8 lg:top-14 -left-10 lg:-left-2 z-50 bg-primeColor w-32 text-[#767676] h-auto p-4 pb-6"
              >
                  <>
                    <Link onClick={() => setShowUser(false)} to="#">
                      <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                        ورود
                      </li>
                    </Link>
                    <Link onClick={() => setShowUser(false)} to="#">
                      <li className="text-gray-400 px-4 py-1 hover:text-white duration-300 cursor-pointer">
                        ثبت نام
                      </li>
                    </Link>
                  </>
                
              </motion.ul>
              )}
            <Link to="#">
              <div className="relative">
                <FaShoppingCart />
                <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
                  0
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
