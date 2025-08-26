import React, { useEffect, useState } from 'react'
import requests from '../Request';
import axios from "axios";
const Main = () => {
    const [movies,setMovies] = useState([]);
    const movie = movies.at(Math.floor(Math.random() * movies.length))

    useEffect(() => {
          axios.get(requests.requestPopular).then((response) => {
              setMovies(response.data.results)
          })
    },[])
         console.log(movie);
         
  return (
    <div>
         
    </div>
  )
}

export default Main
