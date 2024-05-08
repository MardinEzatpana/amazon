import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const HeaderBottom = () => {
  const [show, setShow] = useState(false);
  
  return (
    <div className="w-full bg-[#232f3e] relative">
      <div className="max-w-container mx-auto">
        <div className="w-full px-4 h-full">
          <div
            onClick={() => setShow(!show)}
            className="flex h-14 cursor-pointer items-center gap-3"
          >
            <HiOutlineMenuAlt4 className="w-5 h-5" color="white" />
            <div className="flex items-center gap-3">
              <Link to="#">
                <h1 className="text-gray-200 hover:text-white cursor-pointer">محصولات جدید</h1>
              </Link>
              <Link to="#">
                <h1 className="text-gray-200 hover:text-white cursor-pointer">لوازم الکترونیک</h1>
              </Link>
            </div>
            {show && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-14 z-40 bg-gray-100 w-auto h-auto p-4 pb-6"
              >
                <li className="text-gray-600 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:text-black duration-300 cursor-pointer">
                  محصولات جدید
                </li>
                <li className="text-gray-600 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:text-black duration-300 cursor-pointer">
                  تجهیزات جانبی
                </li>
                <li className="text-gray-600 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:text-black duration-300 cursor-pointer">
                  لوازم الکترونیک
                </li>
                <li className="text-gray-600 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:text-black duration-300 cursor-pointer">
                  ابزارک ها
                </li>
                <li className="text-gray-600 px-4 py-1 hover:text-black duration-300 cursor-pointer">
                  بیشتر...
                </li>
              </motion.ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
