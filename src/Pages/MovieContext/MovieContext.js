import React, { useState, createContext } from 'react'

export const MovieContext = createContext()

const MovieProvider = (props) => {
    const [movies, setmovies] = useState([
        {
            id: 1,
            name: "PK",
            price: 200
        },
        {
            id: 1,
            name: "Dhoom",
            price: 500
        },
        {
            id: 1,
            name: "3 idiots",
            price: 800
        }
    ])
    return (
        <MovieContext.Provider value={[movies, setmovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieProvider
