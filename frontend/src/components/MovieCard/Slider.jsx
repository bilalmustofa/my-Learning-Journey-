import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Card from "./card/Card";
import style from './SlideShow.module.css'

function Slider({ title, movies }) {
  return (
    <>
      <div>
        <h2 className={style.title}>{title}</h2>
        <div className={style.Row}>
          <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={5.8}
          >
            {movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <Card movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Slider;
