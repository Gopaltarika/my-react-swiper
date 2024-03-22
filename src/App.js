import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import './App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slide from "./assets/images/slide1.png";
function App() {
  const swiper = useSwiper();
  return (
    <div>
      <div className='max-w-[1140px] mx-auto px-3'>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, A11y]}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide><img className='w-full' src={slide} alt='img-slide' /></SwiperSlide>
          <SwiperSlide><img className='w-full' src={slide} alt='img-slide' /></SwiperSlide>
          <SwiperSlide><img className='w-full' src={slide} alt='img-slide' /></SwiperSlide>
          <SwiperSlide><img className='w-full' src={slide} alt='img-slide' /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default App;
