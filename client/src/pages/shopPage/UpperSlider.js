import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import floorMats from "../../assets/images/upperSwiper/floorMats.avif";
import wirelessCharging from "../../assets/images/upperSwiper/wirelessChargingPlatform.avif";
import wallConnector from "../../assets/images/upperSwiper/wallConnector.avif";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

const UpperSlider = () => {
  const navigate = useNavigate()
  return (
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
        }}
        loop={true}
      >
        <SwiperSlide>
          <div className="h-[100vh]">
            <img className="swiper-img" src={wallConnector} />
            <div className="swiper-text">
              <h1>Wall Connector</h1>
              <h2>The most convenient way to charge at home</h2>
            <button onClick={() => navigate("/category/charging") } className="swiper-buy-button mt-7">Shop Now</button>

            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-[100vh]">
            <img className="swiper-img" src={wirelessCharging} />
            <div className="swiper-text">
              <h1>Wireless Charging Platform</h1>
              <h2>Provides 15W of fast charging power per device</h2>
              <button onClick={() => navigate("/category/lifestyle") } className="swiper-buy-button mt-7">Shop Now</button>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[100vh]">
            <img className="swiper-img" src={floorMats} />
            <div className="swiper-text">
              <h1>Model Y All-Weather Interior Liners</h1>
              <h2>For maximum protection and durability</h2>
              <button onClick={() => navigate("/category/vehicle_accessories") } className="swiper-buy-button mt-7">Shop Now</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

  );
};

export default UpperSlider;
