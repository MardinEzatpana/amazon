/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/slices/authSlice";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const intitalState = {
    email: "",
    password: "",
    errEmail: "",
    errPassword: "",
  };
  const [values, setValues] = useState(intitalState);

  const handleEmail = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value, errEmail: "" });
  };
  const handlePassword = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value, errPassword: "" });
  };

  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    if (!values.email) {
      setValues({ ...values, errEmail: "ایمیل خود را وارد کنید" });
    } else {
      if (!EmailValidation(values.email)) {
        setValues({ ...values, errEmail: "یک ایمیل معتبر وارد کنید" });
      }
    }

    if (!values.password) {
      setValues({ ...values, errPassword: "رمز عبور ایجاد کنید" });
    } else {
      if (values.password.length < 6) {
        setValues({
          ...values,
          errPassword: "رمز عبور باید حداقل 6 کاراکتر باشد",
        });
      }
    }

    if (
      values.email &&
      EmailValidation(values.email) &&
      values.password &&
      values.password.length >= 6
    ) {
      setValues({ ...values, email: "" });
      setValues({ ...values, password: "" });
      dispatch(login(values));
      navigate("/");
      console.log(values);
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
        <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-3 justify-center">
          <Link to="/">
            <h1 className="text-xl">امازون</h1>
          </Link>
          <div className="flex flex-col gap-1 -mt-1">
            <h1 className="font-titleFont text-xl font-medium">
              برای اطلاعات بیشتر وارد سیستم شوید
            </h1>
            <p className="text-base">وقتی وارد سیستم می شوید، با ما هستید!</p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                با آمازون سریع شروع کنید
              </span>
              <br />
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله.
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                دسترسی به تمام خدمات امازون
              </span>
              <br />
              لورم ایپسوم متن ساختگی و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در
              این صورت می توان امید داشت که تمام و دشواری موجود در.
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
              مورد اعتماد خریداران آنلاین
              </span>
              <br />
              لورم ایپسوم متن ساختگی و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در
              این صورت می توان امید داشت که تمام و دشواری موجود در ارائه.
            </p>
          </div>
          <div className="flex items-center justify-between mt-10">
            <Link to="/">
              <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
                © امازون
              </p>
            </Link>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
            مقررات
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
            حریم خصوصی
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              امنیت
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lgl:w-1/2 h-full">
        <form className="w-full lgl:w-[450px] h-screen flex items-center justify-center">
          <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
          <Link to="/">
          <h1 className="text-3xl font-bold text-center">Amazon</h1>
            </Link>
            <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-3xl mdl:text-4xl mb-4">
              ورود
            </h1>
            <div className="flex flex-col gap-3">
              {/* Email */}
              <div className="flex flex-col gap-.5">
                <p className="font-titleFont text-base font-semibold text-gray-600">
                ایمیل
                </p>
                <input
                  onChange={handleEmail}
                  value={values.email}
                  name="email"
                  className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                  type="email"
                />
                {values.errEmail && (
                  <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                    <span className="font-bold italic mr-1">!</span>
                    {values.errEmail}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="flex flex-col gap-.5">
                <p className="font-titleFont text-base font-semibold text-gray-600">
                  رمز عبور
                </p>
                <input
                  onChange={handlePassword}
                  value={values.password}
                  name="password"
                  className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                  type="password"
                />
                {values.errPassword && (
                  <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                    <span className="font-bold italic mr-1">!</span>
                    {values.errPassword}
                  </p>
                )}
              </div>

              <button
                onClick={handleSignIn}
                className="bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md  duration-300"
              >
                 ورود
              </button>
              <p className="text-sm text-center font-titleFont font-medium">
              حساب کاربری ندارید؟{" "}
                <Link to="/signup">
                  <span className="hover:text-blue-600 duration-300">
                  ثبت نام
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
