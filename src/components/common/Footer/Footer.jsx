import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import FooterListTitle from "./FooterListTitle";
import { paymentCard } from "../../../assets";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const [emailInfo, setEmailInfo] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const location = useLocation();

  const emailValidation = () => {
    return String(emailInfo)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSubscription = () => {
    if (emailInfo === "") {
      setErrMsg("لطفا ایمیل خود را وارد نمایید !");
    } else if (!emailValidation(emailInfo)) {
      setErrMsg("لطفا ایمیل صحیح باشد!");
    } else {
      setSubscription(true);
      setErrMsg("");
      setEmailInfo("");
    }
  };
  return (
    <div className="w-full bg-[#232f3e] py-10">
      <div className="max-w-container grid grid-cols-1 md:grid-cols-2  lg:grid-cols-6 px-4 gap-10">
        <div className="col-span-2">
        <Link to="/">
            <div>
              <img
                className="mr-0 xl:mr-20 -mt-3 w-20 min-w-16 rounded-xl object-cover"
                src="/amazon.png"
              />
            </div>
          </Link>
          <div className="flex flex-col gap-6">
            <p className="text-base w-full md:w-[70%] text-gray-100">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
            <ul className="flex items-center gap-2">
              <a href="#" target="_blank" rel="noreferrer">
                <li className="w-7 h-7 bg-transparent text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaYoutube />
                </li>
              </a>
              <a
                href="https://github.com/mardinezatpanah"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-transparent text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaGithub />
                </li>
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <li className="w-7 h-7 bg-transparent text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaFacebook />
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/mardin-ezatpanah-bb383b236/"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-transparent text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaLinkedin />
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <FooterListTitle title="با ما کسب درامد کن" />
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-base text-gray-200 hover:text-white hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              فروش محصولات شما
            </li>
            <li className="font-titleFont text-base text-gray-200 hover:text-white hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              فروش اپلیکیشن های شما
            </li>
            <li className="font-titleFont text-base text-gray-200 hover:text-white hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              بیشتر ...
            </li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1">
          <FooterListTitle title="درباره ما بیشتر بدانید" />
          <ul className="flex flex-col gap-2">
          <Link to="/about" state={{ data: location.pathname.split("/")[1] }}>
            <li className="font-titleFont text-base text-gray-200 hover:text-white hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              درباره ما
            </li>
            </Link>
            <li className="font-titleFont text-base text-gray-200 hover:text-white hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              تماس با ما
            </li>
          </ul>
        </div>
        <div className="col-span-2 flex flex-col items-center w-full px-4">
          <FooterListTitle title="شرکت در خبرنامه." />
          <div className="w-full">
            {subscription ? (
              <motion.p
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full text-center text-base font-titleFont font-semibold text-green-600"
              >
             اشتراک با موفقیت انجام شد تشکر!
              </motion.p>
            ) : (
              <div className="w-full flex-col flex justify-between items-center gap-4">
                <div className="flex flex-col w-full">
                  <input
                    onChange={(e) => setEmailInfo(e.target.value)}
                    value={emailInfo}
                    className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-white text-lg placeholder:text-base outline-none"
                    type="text"
                    placeholder="ایمل خود را وارد نمایید ...*"
                  />
                  {errMsg && (
                    <p className="text-red-600 text-sm font-semibold font-titleFont text-center animate-bounce mt-2">
                      {errMsg}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleSubscription}
                  className="bg-white text-lightText w-[30%] h-10 hover:bg-black hover:text-white duration-300 text-base tracking-wide"
                >
                  عضوشدن
                </button>
              </div>
            )}

            <img
              className={`w-[80%] lg:w-[60%] mx-auto ${
                subscription ? "mt-2" : "mt-6"
              }`}
              src={paymentCard}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
