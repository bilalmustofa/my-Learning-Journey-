import styles from "./SlideShow.module.css";
import MovieCard from "../MovieCard/MovieCard.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function SlideShow({ title, movies }) {
  console.log(movies);
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.Row}>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={12}
          slidesPerView={5}
          breakpoints={{
            0: { slidesPerView: 1.8, spaceBetween: 8 },
            480: { slidesPerView: 2.3, spaceBetween: 10 },
            640: { slidesPerView: 3.2, spaceBetween: 16 },
            768: { slidesPerView: 3.8, spaceBetween: 20 },
            1024: { slidesPerView: 5.2, spaceBetween: 30 },
            1280: { slidesPerView: 5.8, spaceBetween: 40 },
          }}
        >
          {movies?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideShow;
