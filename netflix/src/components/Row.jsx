import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
  console.log(movies);

  return (
    <div >
      <h2 className="font-bold text-white md:text-xl p-4"> {title} </h2>
      <div className="flex relative items-center group">
        <div id={"slider"} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative z-10">
          {movies.map((item, id) => (
              <Movie item={item} key={id}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Row;
