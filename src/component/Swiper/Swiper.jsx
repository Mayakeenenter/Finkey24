
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import './Swiper.css'
function SwiperSlider() {
  return (
    <div className="slider">
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="div-slide">
                <img src="/image/img1.png" alt="" />
                <p>Connect & Collaborate with Ease</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div-slide">
                <img src="/image/img2.png" alt="" />
                <p>Real-Time Deals for Real Results</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div-slide">
                <img src="/image/img3.png" alt="" />
                <p>Smart Eligibility Checks, Instant Decisions</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div-slide">
                <img src="/image/img4.png" alt="" />
                <p>Start Smart with Complete Mortgage Control</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
  )
}

export default SwiperSlider
