import React from 'react'
import { useState } from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({item}) => {
      const [like, setLike] = useState(false);

 return (
<div
  className="inline-block w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] p-2 relative cursor-pointer"
>
  <img
    className="w-full h-auto block"
    src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
    alt={item.title}
  />
  <div className="absolute top-0 left-0 h-full w-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
    <p className="flex justify-center items-center h-full whitespace-normal text-xs md:text-sm font-bold">
      {item?.title}
    </p>
    <p>
      {like ? (
        <FaHeart className="absolute top-4 left-4 text-red-300" />
      ) : (
        <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
      )}
    </p>
  </div>
</div>
  );
}

export default Movie
