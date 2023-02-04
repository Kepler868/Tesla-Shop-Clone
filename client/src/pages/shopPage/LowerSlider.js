import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import trays from "../../assets/images/lowerSwiper/trays.avif";
import filter from "../../assets/images/lowerSwiper/filter.avif";
import wallConnector from "../../assets/images/lowerSwiper/wallConnector.avif";
import keyFob from "../../assets/images/lowerSwiper/keyFob.avif";
import garageOpen from "../../assets/images/lowerSwiper/garageOpen.avif";
import combo1 from "../../assets/images/lowerSwiper/combo1.avif";
import liners from "../../assets/images/lowerSwiper/liners.avif";
import chargingAdapter from "../../assets/images/lowerSwiper/chargingAdapter.avif";
import arrowBack from "../../assets/images/lowerSwiper/arrowBack.svg";
import arrowForward from "../../assets/images/lowerSwiper/arrowForward.svg";
import { useNavigate } from "react-router-dom";

const LowerSlider = () => {
  const [activeArrow, setActiveArrow] = useState(false);
  const navigate = useNavigate()
  return (
    <div className="mb-20">
      <div className="mt-16 ml-6 mb-8">
        <h3 className="text-[28px] leading-9 font-semibold">Best Sellers</h3>
      </div>
      <div
        onMouseEnter={() => setActiveArrow(true)}
        onMouseLeave={() => setActiveArrow(false)}
      >
        <Swiper
          className="relative"
          slidesOffsetBefore={25}
          slidesPerView={3.2}
          spaceBetween={30}
          loop={true}
          navigation={{
            nextEl: "#next",
            prevEl: "#prev",
          }}
          modules={[Navigation]}
        >
          <button
            id="prev"
            className={activeArrow ? "arrow-swiper left-[25px]" : "hidden"}
          >
            <img className="w-[30px] " src={arrowBack} />
          </button>
          <button
            id="next"
            className={activeArrow ? "arrow-swiper right-[25px]" : "hidden"}
          >
            <img className="w-[30px] " src={arrowForward} />
          </button>
          <SwiperSlide onClick={ () => navigate("/category/vehicle_accessories")} className="cursor-pointer">
            <img src={trays} />
            <h5 className="text-lg mt-6 font-semibold text-left cursor-pointer">
              Model 3/Y Center Console Trays
            </h5>
          </SwiperSlide>
          <SwiperSlide onClick={ () => navigate("/category/vehicle_accessories")} className="cursor-pointer">
            <img src={filter} />
            <h5 className="text-lg mt-6 font-semibold text-left">
              Model 3/Y Air Filter
            </h5>
          </SwiperSlide>
          <SwiperSlide onClick={ () => navigate("/category/charging")} className="cursor-pointer">
            <img src={wallConnector} />
            <h5 className="text-lg mt-6 font-semibold text-left">
              Wall Connector
            </h5>
          </SwiperSlide>
          <SwiperSlide onClick={ () => navigate("/category/vehicle_accessories")} className="cursor-pointer">
            <img src={keyFob} />
            <h5 className="text-lg mt-6 font-semibold text-left">
              Model 3/Y Key Fob
            </h5>
          </SwiperSlide>
          <SwiperSlide onClick={ () => navigate("/category/vehicle_accessories")} className="cursor-pointer">
            <img src={garageOpen} />
            <h5 className="text-lg mt-6 font-semibold text-left">
              Model 3/Y Automatic Garage Opener
            </h5>
          </SwiperSlide>
          <SwiperSlide onClick={ () => navigate("/category/vehicle_accessories")} className="cursor-pointer">
            <img src={combo1} />
            <h5 className="text-lg mt-6 font-semibold text-left">
              CCS Combo 1 Adapter
            </h5>
          </SwiperSlide>
          <SwiperSlide onClick={ () => navigate("/category/vehicle_accessories")} className="cursor-pointer">
            <img src={liners} />
            <h5 className="text-lg mt-6 font-semibold text-left">
              Model Y All-Weather Interior Liners
            </h5>
          </SwiperSlide>
          <SwiperSlide onClick={ () => navigate("/category/vehicle_accessories")} className="cursor-pointer">
            <img src={chargingAdapter} />
            <h5 className="text-lg mt-6 font-semibold text-left">
              SEE J1772 Charging Adapter
            </h5>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default LowerSlider;
