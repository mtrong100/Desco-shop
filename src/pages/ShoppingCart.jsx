import React, { useState } from "react";
import { useShop } from "../context/shop-context";
import { BsCartDash } from "react-icons/bs";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  // const [show, setShow] = useState(false);
  const {
    cartItem,
    removeFromCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    total,
    clearCart,
  } = useShop();

  return (
    <section className="my-32 page-container">
      <div className="flex shoppping-cart overflow-hidden overflow-y-auto max-h-[500px] flex-col gap-5  border-2 border-solid rounded-md border-slate-300">
        {/* display empty cart when no products*/}
        {cartItem.length <= 0 && (
          <div className="flex flex-col items-center justify-center gap-5 p-5">
            <h1 className="text-xl font-bold text-center md:text-4xl text-third">
              Your cart is currently empty
            </h1>
            <BsCartDash className="text-[100px] md:text-[200px]"></BsCartDash>
            <p className="text-sm font-medium text-center md:text-base text-slate-600">
              Before proceed to checkout you must add products to your cart.
            </p>
            <Link
              className="px-5 py-3 font-medium text-white uppercase bg-green-500 rounded-md"
              to="/"
            >
              Return to shop
            </Link>
          </div>
        )}

        {/* show products in your cart */}
        {cartItem.length > 0 &&
          cartItem.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between gap-3 p-3 transition-all rounded-md md:p-5 md:flex-row md:items-center hover:bg-slate-200"
            >
              <div className="flex items-center flex-1 gap-5">
                {/* product-image */}
                <div className="relative flex-1 lg:flex-none lg:w-[300px] md:h-[250px] overflow-hidden rounded-md group">
                  <img className="img-cover" src={item.img} alt="product-img" />
                </div>
                {/* product-info */}
                <div className="flex flex-col items-start flex-1 gap-1 md:gap-3">
                  <h1 className="text-xs font-bold text-blue-500 capitalize md:text-base lg:text-xl">
                    {item.name}
                  </h1>
                  <span className="flex items-center justify-end font-bold md:text-2xl text-third">
                    {`${item.price}$`}
                  </span>
                  {/* action plus and delete */}
                  <div className="flex items-center gap-4 ">
                    <span
                      onClick={() => handleDecreaseQuantity(item)}
                      className="px-4 py-1 font-bold text-white bg-green-500 rounded-md cursor-pointer btn-shinny-1 md:py-2 md:px-6"
                    >
                      -
                    </span>
                    <span className="font-semibold md:text-xl">
                      {item.quantity}
                    </span>
                    <span
                      onClick={() => handleIncreaseQuantity(item)}
                      className="px-4 py-1 font-bold text-white bg-orange-400 rounded-md cursor-pointer btn-shinny-1 md:px-6 md:py-2"
                    >
                      +
                    </span>
                  </div>
                </div>
              </div>

              {/* delete product */}
              <div className="flex items-center justify-between gap-2 md:flex-col">
                <button
                  onClick={() => removeFromCart(item)}
                  className="w-full px-5 py-3 text-sm font-medium text-white uppercase bg-red-500 rounded-md btn-shinny-1 md:text-base"
                >
                  Remove
                </button>
                <button className="w-full px-5 py-3 text-sm font-medium text-white uppercase bg-blue-500 rounded-md btn-shinny-1 md:text-base">
                  <Link to={`/product/${item.id}`}>View Product</Link>
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* show total bill of all products in your cart */}
      <div className="mt-10">
        {cartItem.length > 0 && (
          <>
            <div className="flex items-center justify-end gap-5 md:mt-5 ">
              <h1 className="text-2xl font-bold text-red-500 md:text-3xl">{`Total = ${total}$`}</h1>
              <button
                onClick={() => clearCart()}
                className="px-5 py-3 font-medium text-white uppercase bg-green-500 rounded-md btn-shinny-1 bnt-shinny-1"
              >
                Check out
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ShoppingCart;
