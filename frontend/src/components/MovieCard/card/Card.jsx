import style from "./Card.module.css";
import {FaCirclePlay} from 'react-icons/fa6'
import {BsPlusCircle} from 'react-icons/bs'
import {GoCheckCircleFill} from 'react-icons/go'
import { IoIosArrowDropdownCircle} from 'react-icons/io'

function Card({ movie}) {

  const genres = ['Sci-Fi', 'Thriller', 'Action']
  return (
    <>
    <div className={style.cardWrapper}>
      {/* image */}
      <img src={movie.poster_path} alt="Poster Image" className={style.poster}/>

      {/* hover card */}
      <div className={style.hoverCard}>
        {/* image */}
        <img src={movie.poster_path}  alt="hover Image" className={style.hoverImage}/>

        {/* badge */}
        <div className={style.badge}>
          Recently added
        </div>

        {/* buttons */}
        <div className={style.buttonRow}>
          <FaCirclePlay size={30} color="white" className={style.circleBtn}/>
          <BsPlusCircle size={30} color="white" className={style.circleBtn}/>
          <GoCheckCircleFill size={30} color="white" className={style.circleBtn}/>
          <IoIosArrowDropdownCircle size={40} color="white" className={`${style.downArrowBtn} ${style.circleBtn}`}/>
        </div>

        {/* metaData */}
        <div className={style.metaRow}>
          <span className={style.tag}>U/A 16+</span>
          <span className={style.tag}>Movie</span>
          <span className={style.tag}>HD</span>
        </div>

        {/* genres */}
        <div className={style.genres}>
          {
            genres.map((g, i) => (
              <span key={i}>
                {g}
                {i < genres.length - 1 && (
                  <span className={style.dot}>•</span>
                )}
              </span>
            ))
          }
        </div>
      </div>
    </div>  
    </>
  );
}

export default Card;
