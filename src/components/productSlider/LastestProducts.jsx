import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { lastest } from "../../data";
import ProductItem from "../products/ProductItem";
import ProductItemLastest from "../products/ProductItemLastest";

const LastestProducts = () => {
  return (
    <section className="my-10 lastest-list">
      <div className="page-container">
        <div className="flex items-center gap-3 mb-10">
          {/* <BsFillBoxFill size={50} className="text-blue-500"></BsFillBoxFill> */}
          <h1 className="text-2xl font-bold text-blue-500 uppercase border-b-2 border-blue-500 border-solid md:text-4xl w-fit">
            lastest products
          </h1>
        </div>

        {/* slider */}
        <Swiper
          slidesPerView={4}
          loop={true}
          spaceBetween={20}
          autoplay={{
            delay: 3000,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            600: {
              slidesPerView: 3,
            },
            400: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper "
        >
          {lastest.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductItemLastest item={item}></ProductItemLastest>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LastestProducts;
