import React from 'react'
import { useState } from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({item}) => {
      const [like, setLike] = useState(false);
  return (
    <div className='flex'>
       <div
       
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block p-2 relative cursor-pointer"
            >
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt={item.title}
              />
              <div className="absolute top-0 left-0  h-full w-full  hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="flex justify-center items-center h-full white-space-normal text-xs md:text-sm font-bold">
                  {item?.title}
                </p>
                <p>
                  {like ? (
                    <FaHeart className="absolute top-4 left-4 text-gray-300" />
                  ) : (
                    <FaRegHeart />
                  )}
                </p>
              </div>
            </div>
    </div>
  )
}

export default Movie
