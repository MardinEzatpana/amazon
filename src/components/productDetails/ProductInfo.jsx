/* eslint-disable react/prop-types */
const ProductInfo = ({ productInfo }) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo.productName}</h2>
      <p className="text-xl font-semibold">{productInfo.price}{" "}تومان</p>
      <p className="text-base text-gray-600">{productInfo.des}</p>
      <p className="text-sm">اولین نفری باشید که نظر میدهد.</p>
      <p className="font-medium text-lg">
        <span className="font-normal">رنگ ها:</span> {productInfo.color}
      </p>
      <button
        className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
      >
        اضافه کردن به سبد
      </button>
      <p className="font-normal text-sm">
        <span className="text-base font-medium"> دسته بندی ها:</span>
    {""} مجموعه {productInfo.productName}
      </p>
    </div>
  );
};

export default ProductInfo;
