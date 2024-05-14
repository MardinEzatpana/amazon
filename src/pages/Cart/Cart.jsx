import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { checkout, resetCart } from "../../redux/slices/cartSlice";
import { emptyCart } from "../../assets";
import ItemCard from "./ItemCard";

const Cart = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state?.data);
  }, [location]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const [totalAmt, setTotalAmt] = useState("");
  const [shippingCharge, setShippingCharge] = useState("");
  useEffect(() => {
    let price = 0;
    products.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [products]);
  useEffect(() => {
    if (totalAmt <= 200) {
      setShippingCharge(30);
    } else if (totalAmt <= 400) {
      setShippingCharge(25);
    } else if (totalAmt > 401) {
      setShippingCharge(20);
    }
  }, [totalAmt]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="سبد خرید" prevLocation={prevLocation}/>
      {products.length > 0 ? (
        <div className="pb-20">
          <div className="w-full h-20 bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold">
            <h2 className="col-span-2">محصول</h2>
            <h2>قیمت</h2>
            <h2>تعداد</h2>
            <h2>مجموع</h2>
          </div>
          <div className="mt-5">
            {products.map((item, i) => (
              <div key={i}>
                <ItemCard item={item} />
              </div>
            ))}
          </div>

          <button
            onClick={() => dispatch(resetCart())}
            className="py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
          >
            پاک کردن همه
          </button>

          <div className="flex flex-col mdl:flex-row justify-between border py-4 px-4 items-center gap-2 mdl:gap-0">
            <div className="flex items-center gap-4">
              <input
                className="w-44 mdl:w-52 h-8 px-4 border text-primeColor text-sm outline-none border-gray-400"
                type="text"
                placeholder="شماره کپن"
              />
              <p className="text-sm mdl:text-base font-semibold">
                کد تخفیف
              </p>
            </div>
            <p className="text-lg font-semibold">بروزرسانی سبد</p>
          </div>
          <div className="max-w-7xl gap-4 flex justify-end mt-4">
            <div className="w-96 flex flex-col gap-4">
              <h1 className="text-2xl font-semibold text-right">جمع سبد</h1>
              <div>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  قیمت محصول
                  <span className="font-semibold tracking-wide font-titleFont">
                    {totalAmt}{" "}تومان
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                هزینه حمل و نقل
                  <span className="font-semibold tracking-wide font-titleFont">
                    {shippingCharge}{" "}تومان
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
                  کل قیمت
                  <span className="font-bold tracking-wide text-lg font-titleFont">
                    {totalAmt + shippingCharge}{" "}تومان
                  </span>
                </p>
              </div>
              <div className="flex justify-end">
                <Link to="/">
                  <button onClick={() => dispatch(checkout())}
                   className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
                    انتقال به صفحه پرداخت
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
        >
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="emptyCart"
            />
          </div>
          <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold uppercase">
            سبد خرید شما احساس تنهایی می کند.
            </h1>
            <p className="text-sm text-center px-10 -mt-2">
            سبد خرید شما اماده ی خدمت کردن است. به آن هدف بدهید - آن را پر کنید،
               با لپ تاپ، موبایل، هدفون و غیره و آن را شاد کنید.
            </p>
            <Link to="/shop">
              <button className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                برو به صفحه محصولات
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
