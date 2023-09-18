import { Swiper, SwiperSlide } from "swiper/react";
import FullWidthCard from "./FullWidthCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";

const FullWidthSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><FullWidthCard title={'Tissot-Black dial with golden ring'}/></SwiperSlide>
        <SwiperSlide><FullWidthCard title={'testing add one'}/></SwiperSlide>
        <SwiperSlide><FullWidthCard title={'two two two'}/></SwiperSlide>
        <SwiperSlide><FullWidthCard title={'Tissot-Black dial with golden ring'}/></SwiperSlide>
      </Swiper>
    </>
  );
};

export default FullWidthSlider;
