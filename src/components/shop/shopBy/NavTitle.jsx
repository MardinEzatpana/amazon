/* eslint-disable react/prop-types */
import { BiCaretDown } from "react-icons/bi";

const NavTitle = ({ title, icons }) => {
  return (
    <div className="flex items-center justify-between pb-5">
      {icons ? (
        <>
          <h3 className="font-bold lg:text-lg text-primeColor">{title}</h3>
          {icons && <BiCaretDown />}
        </>
      ) : (
        <>
          <h4 className="font-bold lg:text-lg text-primeColor">{title}</h4>
        </>
      )}
    </div>
  );
};

export default NavTitle;
