import Slider from "./Slider.jsx";
import { movies } from './Data.jsx'

function Row() {
  return (
    <>
      <div className="bg-black">
        <Slider title ='Movies suggestion' movies={movies}/>
        <Slider title ='Movies suggestion' movies={movies}/>
        <Slider title ='Movies suggestion' movies={movies}/>
      </div>
    </>
  );
}

export default Row;