import { useState } from "react";
import NavTitle from "./NavTitle";
import { categores } from "../../../constants";

const Category = () => {
  const [showSubCatOne, setShowSubCatOne] = useState(false);
  const [showSubCatTwo, setShowSubCatTwo] = useState(false);

  return (
    <div className="w-full">
      <NavTitle title="خرید بر اساس دسته بندی" />
      <div>
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {categores.map(({ _id, title, news, tools }) => (
            <li
              key={_id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center justify-between"
            >
              {title}
              {news && (
                <span className="text-[10px] lg:text-xs cursor-pointer text-gray-400 hover:text-primeColor duration-300">
                  <span
                    onClick={() => setShowSubCatOne(!showSubCatOne)}
                  >
                    <div className="text-lg">
                    {showSubCatOne ? "×" : "+"}
                    </div>
                    {showSubCatOne &&
                      news.map(({ id, name }) => (
                        <div
                          key={id}
                          className="border-b-[1px] border-b-[#F0F0F0] pb-2"
                        >
                          {name}
                        </div>
                      ))}
                  </span>
                </span>
              )}
              {tools && (
                <span className="text-[10px] lg:text-xs cursor-pointer text-gray-400 hover:text-primeColor duration-300">
                  <span
                    onClick={() => setShowSubCatTwo(!showSubCatTwo)}
                  >
                    <div className="text-lg">
                    {showSubCatTwo ? "×" : "+"}
                    </div>
                    {showSubCatTwo &&
                      tools.map(({ id, name }) => (
                        <div
                          key={id}
                          className="border-b-[1px] border-b-[#F0F0F0] pb-2"
                        >
                          {name}
                        </div>
                      ))}
                  </span>
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
