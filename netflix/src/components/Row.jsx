import axios from "axios";
import  { useEffect, useState } from "react";
import Movie from "./Movie";
import {MdChevronLeft,MdChevronRight} from "react-icons/md"


const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

     const slideLeft = () => {
         var slider = document.getElementById('slider');
         slider.scrollLeft= slider.scrollLeft - 500
     }
     const slideRight = () => {
         var slider = document.getElementById('slider');
         slider.scrollLeft= slider.scrollLeft + 500
     }
  return (
    // < >
    //    <div className="flex  gap-4 overflow-x-scroll">
    //   <h2 className="font-bold text-white md:text-xl p-4"> {title} </h2>
    //   <div className="flex relative items-center group">
    //     <MdChevronLeft 
    //     onClick={slideLeft}
    //     size={40}
    //      className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block"/>
    //     <div id={"slider"} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative z-10">
    //       {movies.map((item, id) => (
    //           <Movie item={item} key={id}/>
    //       ))}
    //     </div>
    //     <MdChevronRight 
    //      onClick={slideRight}
    //     size={40} className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block"/>
    //   </div>
    //   </div>
    // </>
    <>
    
    <h2 className="font-bold text-white md:text-xl p-4">{title}</h2>
     {/* <div className="mb-4"> */}
    <div className="relative flex items-center group">
      <MdChevronLeft
        onClick={slideLeft}
        size={40}
        className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block z-20"
      />

      <div
        id={"slider"}
        className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
      >
        {movies.map((item, id) => (
          <Movie item={item} key={id} />
        ))}
      </div>

      <MdChevronRight
        onClick={slideRight}
        size={40}
        className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block z-20"
      />
    </div>
  {/* </div> */}
  </>
  );
};

export default Row;
