import React from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useShop } from "../context/shop-context";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, addToCart } = useShop();

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  const { name, img, price } = product;

  return (
    <section className="my-32 page-container">
      <div className="grid items-center gap-5 p-5 border-2 border-blue-300 border-solid rounded-md shadow-md lg:grid-cols-2 ">
        <div className="relative overflow-hidden w-full h-[300px] md:h-[400px] rounded-md group">
          <img className="img-cover" src={img} alt="product-img" />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-bold text-blue-500 md:text-3xl">
            {name}
          </h1>
          <p className="text-xs md:text-base text-slate-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            quae facere ut, nemo a officiis rerum, amet libero omnis fugit eius
            adipisci praesentium earum natus quo voluptate repellat. Ex, ipsam!
          </p>
          <div className="flex items-center justify-between">
            <span className="text-4xl font-bold text-third">{`${price}$`}</span>
            <span className="flex items-center text-2xl text-yellow-400">
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
            </span>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="w-full px-6 py-4 mt-3 font-semibold text-white bg-blue-500 rounded-md btn-shinny-1 md:w-fit"
          >
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
