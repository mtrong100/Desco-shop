import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { banner } from "../../data";

const Banner = () => {
  return (
    <section className="pt-[100px] lg:pt-[80px] bg-blue-50">
      <Swiper
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 5000,
        }}
        modules={[Autoplay]}
        className="mySwiper "
      >
        {banner.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="grid gap-5 md:grid-cols-2 place-items-center page-container">
              <div className="flex flex-col gap-2 md:max-w-lg">
                <span className="text-base font-semibold text-blue-500">
                  {item.smallTitle}
                </span>
                <h1 className="text-3xl font-bold text-blue-600 lg:text-4xl">
                  {item.title}
                </h1>
                <p className="text-sm text-slate-600">{item.desc}</p>
                <button className="px-6 py-3 mt-5 font-medium text-white bg-blue-500 rounded-lg btn-shinny-1 w-fit">
                  Explore now
                </button>
              </div>

              <div>
                <img className="img-cover" src={item.img} alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
