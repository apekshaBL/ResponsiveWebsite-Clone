import React, { useEffect, useState } from 'react'
import GlobalApi from '../services/GlobalApi'

function Slider() {
    const[movieList,setMovieList]=useState([]);
    useEffect(()=>{
          getTrendingMovies();
    },[])
    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }
  return (
    <div className='text-white'>Slider</div>
  )
}

export default Slider