import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <div className="h-[500px] bg-white">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 7000,
        }}
        className="h-[90%]"
      >
        <SwiperSlide>
          <img src={"../image/carousel_1.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../image/carousel_2.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../image/carousel_3.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../image/carousel_4.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../image/carousel_5.jpg"} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="h-[5%] bg-gradient-to-b from-stone-400" />
    </div>
  );
};

export default Carousel;
