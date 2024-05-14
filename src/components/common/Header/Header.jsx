import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/slices/authSlice";
import { searchProducts } from "../../../constants";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [showUser, setShowUser] = useState(false);
  const [sidenav, setSidenav] = useState(false);
  const [category, setCategory] = useState(false);
  const location = useLocation();
  const products = useSelector((state) => state.cart.products);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [, setShowSearchBar] = useState(false);
  const navigate = useNavigate();

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

  const handleSignOut = () => {
    dispatch(logout());
    setSidenav(false);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = searchProducts.filter((item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  return (
    <div className="w-full h-20 bg-[#131921] sticky top-0 z-50 border-b-[1px] border-b-white">
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <div className="flex items-center justify-between h-full">
          <Link to="/">
            <div>
              <img
                className="w-12 h-6 md:h-10 mr-2 xl:mr-20 md:w-20 min-w-16 rounded-xl object-cover"
                src="/amazon.png"
              />
            </div>
          </Link>
          <div>
            {showMenu && (
              <div className="flex justify-between gap-20 items-center w-full px-4 h-full">
                <div className="w-full me-10 md:w-[300px] lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between ps-6 rounded-xl">
                  <input
                    className="h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
                    type="text"
                    onChange={handleSearch}
                    value={searchQuery}
                    placeholder="جستجوی محصولات ..."
                  />
                  <FaSearch
                    className="w-12 h-12 rounded-e-xl bg-orange-300 p-3"
                    color="#414040"
                  />
                  {searchQuery && (
                    <div
                      className={`w-[350px] mx-auto h-96 bg-white top-20 absolute right-[20%] lg:right-[40%] z-50 overflow-y-scroll shadow-2xl cursor-pointer`}
                    >
                      {searchQuery &&
                        filteredProducts.map((item) => (
                          <div
                            onClick={() =>
                              navigate(
                                `/product/${item._id}`,
                                {
                                  state: {
                                    item: item,
                                  },
                                }
                              ) &
                              setShowSearchBar(true) &
                              setSearchQuery("")
                            }
                            key={item._id}
                            className="max-w-[300px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                          >
                            <img
                              className="w-24"
                              src={item.img}
                              alt="productImg"
                            />
                            <div className="flex flex-col gap-1">
                              <p className="font-semibold text-lg">
                                {item.productName}
                              </p>
                              <p className="text-sm">
                                قیمت:{" "}
                                <span className="text-primeColor font-semibold">
                                  {item.price}{" "}تومان
                                </span>
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
                <div className="flex gap-4 pl-10 items-center cursor-pointer relative">
                  <div onClick={() => setShowUser(!showUser)} className="flex">
                    <FaCaretDown color="white" />
                    <FaUser size={20} color="white" />
                  </div>
                  {showUser && (
                    <motion.ul
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="absolute top-14 -left-4 z-40 bg-gray-100 w-44 h-auto p-4 pb-6"
                    >
                      {user.authUser ? (
                        <>
                          <Link onClick={() => setShowUser(false)} to="/">
                            <li className="text-gray-400 pl-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:text-black duration-300 cursor-pointer">
                              {user.email}
                            </li>
                          </Link>
                          <Link onClick={handleSignOut} to="/">
                            <li className="text-gray-400 pr-12 py- hover:text-red-500 duration-300 cursor-pointer">
                              خروج
                            </li>
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link onClick={() => setShowUser(false)} to="/signin">
                            <li className="text-gray-600 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:text-black duration-300 cursor-pointer">
                              ورود
                            </li>
                          </Link>
                          <Link onClick={() => setShowUser(false)} to="/signup">
                            <li className="text-gray-600 px-4 py-1 hover:text-black duration-300 cursor-pointer">
                              ثبت نام
                            </li>
                          </Link>
                        </>
                      )}
                    </motion.ul>
                  )}
                  <Link
                    to="/cart"
                    state={{ data: location.pathname.split("/")[1] }}
                  >
                    <div className="relative">
                      <FiShoppingCart size={30} color="white" />
                      <span className="absolute font-titleFont -top-2 right-1 text-md font-bold w-4 h-4 flex items-center justify-center rounded-full bg-transparent text-orange-400">
                        {products.length > 0 ? products.length : 0}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            )}
            <HiMenuAlt2
              onClick={() => setSidenav(!sidenav)}
              className="md:hidden cursor-pointer w-8 h-6 rounded-md bg-white"
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
                      className="w-16 h-8 mb-6 rounded-full"
                      src="/amazon.png"
                      alt="logo"
                    />
                    <div className="text-gray-200 flex flex-col gap-2">
                      <div className="relative w-full min-w-[260px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between ps-6 rounded-xl">
                        <input
                          className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
                          type="text"
                          onChange={handleSearch}
                          value={searchQuery}
                          placeholder="جستجوی محصولات ..."
                        />
                        <FaSearch
                          className="w-12 min-w-10 h-12 rounded-e-xl bg-orange-300 p-3"
                          color="#414040"
                        />
                        {searchQuery && (
                          <div
                            className={`w-[280px] mx-auto h-96 bg-white top-24 absolute right-0 z-50 overflow-y-scroll shadow-2xl cursor-pointer`}
                          >
                            {searchQuery &&
                              filteredProducts.map((item) => (
                                <div
                                  onClick={() =>
                                    navigate(
                                      `/product/${item._id}`,
                                      {
                                        state: {
                                          item: item,
                                        },
                                      }
                                    ) &
                                    setShowSearchBar(true) &
                                    setSidenav(false)&
                                    setSearchQuery("")
                                  }
                                  key={item._id}
                                  className="max-w-[250px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                                >
                                  <img
                                    className="w-24"
                                    src={item.img}
                                    alt="productImg"
                                  />
                                  <div className="flex flex-col gap-1">
                                    <p className="font-semibold text-lg">
                                      {item.productName}
                                    </p>
                                    <p className="text-sm">
                                      قیمت:{" "}
                                      <span className="text-primeColor font-semibold">
                                        {item.price}{" "}تومان
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              ))}
                          </div>
                        )}
                      </div>
                      <div className="flex gap-4 mt-4 items-center cursor-pointer relative">
                        <div
                          onClick={() => setShowUser(!showUser)}
                          className="flex"
                        >
                          <FaCaretDown color="white" />
                          <FaUser color="white" />
                        </div>
                        {showUser && (
                          <motion.ul
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="absolute top-16 z-40 bg-gray-100 w-44 text-white h-auto p-4 pb-6"
                          >
                            {user.authUser ? (
                              <>
                                <Link onClick={() => setSidenav(false)} to="/">
                                  <li className="text-gray-400 pl-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:text-black duration-300 cursor-pointer">
                                    {user.email}
                                  </li>
                                </Link>
                                <Link onClick={handleSignOut} to="/">
                                  <li className="text-gray-400 pr-12 py- hover:text-red-500 duration-300 cursor-pointer">
                                    خروج
                                  </li>
                                </Link>
                              </>
                            ) : (
                              <>
                                <Link
                                  onClick={() => setShowUser(false)}
                                  to="/signin"
                                >
                                  <li className="text-gray-600 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:text-black duration-300 cursor-pointer">
                                    ورود
                                  </li>
                                </Link>
                                <Link
                                  onClick={() => setShowUser(false)}
                                  to="/signup"
                                >
                                  <li className="text-gray-600 px-4 py-1 hover:text-black duration-300 cursor-pointer">
                                    ثبت نام
                                  </li>
                                </Link>
                              </>
                            )}
                          </motion.ul>
                        )}
                        <Link
                          to="/cart"
                          state={{ data: location.pathname.split("/")[1] }}
                          onClick={() => setSidenav(false)}
                        >
                          <div className="relative">
                            <FaShoppingCart color="white" />
                            <span className="absolute font-titleFont -top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-transparent text-orange-400">
                              {products.length > 0 ? products.length : 0}
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h1
                        onClick={() => setCategory(!category)}
                        className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                      >
                        خرید بر اساس دسته بندی{" "}
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
