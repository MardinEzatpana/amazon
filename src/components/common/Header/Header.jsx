import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import { navBarList } from "../../../constants";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const [category, setCategory] = useState(false);
  useEffect(() => {
    let ResponsiveMenu = () => {
      if (window.innerWidth < 667) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
  }, []);

  return (
    <div className="w-full h-20 bg-black sticky top-0 z-50 border-b-[1px] border-b-white">
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <div className="flex items-center justify-between h-full">
          <Link to="/">
            <div>
              <img className="hidden md:inline-block w-16 rounded-full object-cover" src="/amazon.jfif" />
            </div>
          </Link>
          <div>
            {showMenu && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center w-auto z-50 p-0 gap-2"
              >
                <>
                  {navBarList.map(({ _id, title, link }) => (
                    <NavLink
                      key={_id}
                      className="flex font-medium hover:font-bold w-32 h-6 justify-center items-center px-4 text-base text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-l-[2px] border-l-gray-300 hoverEffect last:border-l-0"
                      to={link}
                    >
                      <li>{title}</li>
                    </NavLink>
                  ))}
                </>
              </motion.ul>
            )}
            <HiMenuAlt2
              onClick={() => setSidenav(!sidenav)}
              className="inline-block md:hidden cursor-pointer w-8 h-6 rounded-md bg-white absolute top-6 right-4"
            />
            {sidenav && (
              <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-95 z-50">
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-[80%] h-full relative"
                >
                  <div className="w-full h-full p-6">
                    <img
                      className="w-12 h-8 mb-6 rounded-full"
                      src="/amazon.jfif"
                      alt="logo"
                    />
                    <ul className="text-gray-200 flex flex-col gap-2">
                      {navBarList.map((item) => (
                        <li
                          className="font-normal hover:font-bold items-center text-lg text-rray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white pr-3 sm:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                          key={item._id}
                        >
                          <NavLink
                            to={item.link}
                            onClick={() => setSidenav(false)}
                          >
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                    <h1
                        onClick={() => setCategory(!category)}
                        className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                      >
                        خرید بر اساس دسته بندی {" "}
                        <span className="text-lg">{category ? "-" : "+"}</span>
                      </h1>
                      {category && (
                        <motion.ul
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="text-sm flex flex-col gap-1"
                        >
                          <li className="headerSedenavLi">محصولات جدید</li>
                          <li className="headerSedenavLi">تجهیزات جانبی</li>
                          <li className="headerSedenavLi">لوازم الکترونیک</li>
                          <li className="headerSedenavLi">ابزارک ها</li>
                          <li className="headerSedenavLi">بیشتر...</li>
                        </motion.ul>
                      )}
                    </div>
                  </div>
                  <span
                    onClick={() => setSidenav(false)}
                    className="w-8 h-8 border-[1px] border-gray-300 absolute top-6 -left-12 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                  >
                    <MdClose />
                  </span>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
