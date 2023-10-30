import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance from '../instance';


function Banner({fetchURL}) {
    //console.log(fetchURL);
    const[movie,setMovie] = useState()

    const base_url = "https://image.tmdb.org/t/p/original/";


    const fetchData = async ()=>{
        const {data} = await instance.get(fetchURL)
        //console.log(data.results[0])
        //console.log(data.results[Math.floor(Math.random()*data.results.length)])
        setMovie(data.results[Math.floor(Math.random()*data.results.length)])
    }
    console.log(movie);

    useEffect(()=>{
      fetchData()
    },[])
  return (
    <div style={{height:'600px', backgroundImage:`url(${base_url}${movie?.backdrop_path})`,backgroundSize:'cover',backgroundAttachment:'fixed'}}>
        <div className='banner-content'>
            <h1>{movie?.name}</h1>
                <div className='button-content' style={{width:'300px' }}>
                  <button className='play btn btn-danger me-3' >Play <i class="fa-solid fa-play"></i></button>
                  <button className='more btn btn-outline-light'>More info <i class="fa-solid fa-caret-down" style={{background:'transparent'}}></i></button>  
                </div>
            <h2>{movie?.overview?.slice(0,200)}...</h2>
        </div>
    </div>
  )
}

export default Banner



