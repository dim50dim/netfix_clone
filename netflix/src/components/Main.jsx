import React, { useEffect, useState } from "react";
import requests from "../Request";
import axios from "axios";
const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies.at(Math.floor(Math.random() * movies.length));

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  
  const truncateString = (str,num) => {
          return  str?.length > num ? str.slice(0,num) + '...' : str;
  }

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="font-bold text-2xl md:text-5xl">{movie?.title}</h1>
          <button className="border bg-gray-300 text-black border-gray-300 py-3 px-5">
            Play
          </button>
          <button  className="ml-4 border  text-white py-3 px-5">
            Watch it later
          </button>

          <p className="text-red-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] xl:max-w-[35%] lg:max-w-[50%] text-gray-200">{truncateString(movie?.overview, 150)}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
