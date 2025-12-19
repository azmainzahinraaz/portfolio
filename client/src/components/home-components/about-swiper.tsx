import { useRef, type ReactNode } from "react";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";
// import required modules
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { aboutSwiperData } from "@/services/data/about-data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function AboutSwiper(): ReactNode {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <section className="w-full h-full flex justify-center py-10">
      <div className="w-full flex items-center max-w-small-max-width bg-secondary-bg-color/30 rounded-md shadow-[0px_0px_6px_1px_rgba(0,0,0,0.1)] relative">
        <Swiper
          navigation={true}
          grabCursor={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          loop={true}
          className="mySwiper"
          modules={[Autoplay]}
          ref={swiperRef}
        >
          {aboutSwiperData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full flex justify-center items-center flex-col gap-2 text-center py-15">
                <img
                  src={item.logoUrl}
                  alt={item.platform}
                  className="w-19.5 h-19.5 p-3 rounded-full object-cover object-center border-2 border-white/60"
                />
                <h3 className="text-white text-xl font-semibold">
                  {item.platform}
                </h3>
                <p className="text-white/90 text-lg">{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="absolute p-4 max-sm:p-2 rounded-full text-white bg-blue left-10 z-99 cursor-pointer hover:bg-secondary-bg-color/80 transition-all duration-200"
          onClick={() => swiperRef.current?.swiper.slidePrev()}
        >
          <FaArrowLeft />
        </button>
        <button
          className="absolute p-4 max-sm:p-2 rounded-full text-white bg-blue right-10 z-99 cursor-pointer hover:bg-secondary-bg-color/80 transition-all duration-200"
          onClick={() => swiperRef.current?.swiper.slideNext()}
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
