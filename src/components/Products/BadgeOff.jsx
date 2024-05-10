/* eslint-disable react/prop-types */

const BadgeOff = ({ text }) => {
  return (
    <div className="bg-red-600 w-[50px] -mt-6 h-[18px] rounded-[40px] text-white flex justify-center items-center text-sm font-semibold hover:bg-black duration-300 cursor-pointer">
      {text}%
    </div>
  );
};

export default BadgeOff;
