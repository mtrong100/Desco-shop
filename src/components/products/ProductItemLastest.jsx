import React from "react";
import { Link } from "react-router-dom";
import { useShop } from "../../context/shop-context";
import { AiFillHeart, AiFillStar } from "react-icons/ai";

const ProductItemLastest = ({ item }) => {
  const { addToCart } = useShop();
  const { id, name, img, desc, price, isFavorite } = item;

  return (
    <div className="flex flex-col h-full p-3 border-2 border-solid rounded-md shadow-xl border-slate-200">
      {/* info */}
      <div className="overflow-hidden w-full h-[200px] mb-5 rounded-md group select-none">
        <img className="img-cover" src={img} alt="product-img" />
      </div>

      <div className="flex flex-col flex-1 gap-1 mb-2 lg:mb-5">
        <h1 className="text-xl font-bold text-blue-500 capitalize md:text-base lg:text-xl">
          {name}
        </h1>
        <p className="font-medium md:text-xs lg:text-sm text-slate-600">
          {desc}
        </p>
      </div>

      {/* action */}
      <div className="flex flex-col gap-3 mt-auto">
        <div className="flex items-center justify-between">
          <span className="text-4xl font-bold text-third">{`${price}$`}</span>
          <span className="flex items-center gap-2 text-yellow-500">
            <span className="text-lg font-bold">4.8</span>
            <AiFillStar size={25}></AiFillStar>
          </span>
        </div>
        <Link to={`/product/${id}`}>
          <button className="w-full py-3 font-semibold text-white capitalize transition-all bg-blue-500 border-2 border-transparent border-solid rounded-md btn-shinny-1">
            View product
          </button>
        </Link>
        <button
          onClick={() => addToCart(item)}
          className="w-full py-3 font-semibold text-blue-500 capitalize border-2 border-solid rounded-md btn-shinny-2 blue-500 border-1"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItemLastest;
