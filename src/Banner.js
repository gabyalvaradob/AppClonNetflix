import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import "./Banner.css";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length)
                ]);
            return request;
        } fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }


    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    'https://image.tmdb.org/t/p/original/${movie?.backdrop_path}'
                )`,
                backgroundPosition: "center center",
            }}
        > {/* imagen de fondo */}
            <div className="banner_contents">
                {/* titulo */}
                <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
           

            {/* div > 2 botones */}
            <div className="banner_buttons">
                <button className="banner_button">▶ Reproducir</button>
                <button className="banner_button">+ Mi Lista</button>
            </div>

            {/* descripcion */}
            <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
            </div>

            <div className="banner-fadeBottom"></div>
        </header>
    )
}

export default Banner
