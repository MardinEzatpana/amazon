import { Link, useLocation } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { MdSwitchAccount } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

const SpecialCase = () => {
  const location = useLocation();
  const products = useSelector((state) => state.cart.products);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logout());
  };
  return (
    <div className="fixed top-52 xl:top-60 left-2 z-20 flex flex-col gap-2">
      {user.authUser ? (
        <>
          <Link onClick={handleSignOut} to="/">
            <img
              src="https://avatars.githubusercontent.com/u/93155550?v=4"
              data-tooltip-target="tooltip-right"
              data-tooltip-placement="right"
              className="w-12 md:w-16 h-[50px] md:h-[70px] object-cover rounded-xl"
              alt="user"
            />
          </Link>
          <div
            id="tooltip-right"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            {user.email} 
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </>
      ) : (
        <>
          <Link to="signin">
            <div className="bg-[#232f3e] w-12 md:w-16 h-[50px] md:h-[70px] rounded-md flex flex-col gap-1 text-white justify-center items-center shadow-sm shadow-gray-400 overflow-x-hidden group cursor-pointer">
              <div className="flex justify-center items-center">
                <MdSwitchAccount className="text-2xl translate-x-12 group-hover:-translate-x-3 transition-transform duration-200" />

                <MdSwitchAccount className="text-2xl translate-x-3 group-hover:-translate-x-12 transition-transform duration-200" />
              </div>
              <p className="text-xs font-semibold font-titleFont">پروفایل</p>
            </div>
          </Link>
        </>
      )}

      <Link to="/cart" state={{ data: location.pathname.split("/")[1] }}>
        <div className="bg-[#232f3e] w-12 md:w-16 h-[50px] md:h-[70px] rounded-md flex flex-col gap-1 text-white justify-center items-center shadow-sm shadow-gray-400 overflow-x-hidden group cursor-pointer relative">
          <div className="flex justify-center items-center">
            <RiShoppingCart2Fill className="text-2xl translate-x-12 group-hover:-translate-x-3 transition-transform duration-200" />

            <RiShoppingCart2Fill className="text-2xl translate-x-3 group-hover:-translate-x-12 transition-transform duration-200" />
          </div>
          <p className="text-xs font-semibold font-titleFont">الان بخر</p>
          {products.length > 0 && (
            <span className="absolute top-0 md:top-1 right-1 md:right-2 bg-transparent text-orange-500 text-sm w-4 h-4 rounded-full flex items-center justify-center font-semibold">
              {products.length}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
};

export default SpecialCase;
