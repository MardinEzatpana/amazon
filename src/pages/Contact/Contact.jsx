import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const Contact = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state?.data);
  }, [location]);

  const [clientName, setclientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMessages, setErrMessages] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleName = (e) => {
    setclientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessages("");
  };

  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const handlePost = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName("نام خود را وارد کنید");
    }
    if (!email) {
      setErrEmail("ایمیل خود را وارد کنید");
    } else {
      if (!EmailValidation(email)) {
        setErrEmail(" ایمیل معتبر وارد کنید");
      }
    }
    if (!messages) {
      setErrMessages("پیام خود را بذارید");
    }
    if (clientName && email && EmailValidation(email) && messages) {
      setSuccessMsg(
        `ممنون ${clientName} عزیز , پیام شما با موفقیت دریافت شد. جزئیات بیشتر از طریق ایمیل برای شما ارسال خواهد شد.`
      );
    }
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Contact" prevLocation={prevLocation} />
      {successMsg ? (
        <div className="flex justify-center">
          <p className="pb-20 w-96 font-medium text-green-500">{successMsg}</p>
        </div>
      ) : (
        <form className="pb-20 flex flex-col items-center">
          <h1 className="font-titleFont w-[240px] md:w-[490px] text-right font-semibold text-3xl">
           فرم را پر کنید
          </h1>
          <div className="w-[250px] md:w-[500px] h-auto py-6 flex flex-col gap-6">
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
                نام
              </p>
              <input
                onChange={handleName}
                value={clientName}
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                type="text"
              />
              {errClientName && (
                <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                  {errClientName}
                  <span className="text-sm italic font-bold">!</span>
                </p>
              )}
            </div>
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
                ایمیل
              </p>
              <input
                onChange={handleEmail}
                value={email}
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                type="email"
              />
              {errEmail && (
                <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                  {errEmail}
                  <span className="text-sm italic font-bold">!</span>
                </p>
              )}
            </div>
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
                پیغام
              </p>
              <textarea
                onChange={handleMessages}
                value={messages}
                cols="30"
                rows="3"
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
                type="text"
              ></textarea>
              {errMessages && (
                <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                  {errMessages}
                  <span className="text-sm italic font-bold">!</span>
                </p>
              )}
            </div>
            <button
              onClick={handlePost}
              className="w-44 bg-primeColor text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-black hover:text-white duration-200"
            >
              ارسال
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Contact;
