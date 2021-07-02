import React, { useState, useContext } from 'react'
import Movies from '../Movies'
import { MovieContext } from '../MovieContext/MovieContext'

const MovieList = () => {

    const [movies, setmovies] = useContext(MovieContext)
    return (
        <div>
            {movies.map(movie => (
                <Movies name={movie.name} price={movie.price} />
            ))}
        </div>
    )
}

export default MovieList
