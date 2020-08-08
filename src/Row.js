import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = 'https://image.tmdb.org/t/p/original';

function Row({ title, fetchURL, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    // se necesita un codigo que corra una especifica condicion o variable
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);

    // console.table(movies);
    // console.log(movies);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay:1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
          setTrailerUrl('');
        } else {
          movieTrailer(movie?.name || movie?.title || "")
            .then((url) => {
                //https://www.youtube.com/watch?v=CXPT6872Vfc
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log(error));
        }
      };

    return (
        <div className="row">
            {/* titulo */}
            <h2>{title}</h2>

            <div className="row_posters">
            {/* muchos posters */}
            
            {movies.map(movie => (
                <img 
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row_poster ${isLargeRow ? "row_posterLarge" : ""}`} 
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name} 
                />
            ))}
            </div>
            {trailerUrl && (<YouTube videoId={trailerUrl} opts={opts} className="row_video" />)}
            {/* contenedor -> posters */}
        </div>
    )
}

export default Row
