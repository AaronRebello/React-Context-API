import React, { useContext } from 'react'

const Movies = (props) => {

    return (
        <div>

            <h2>{props.name}</h2>
            <p>{props.price}</p>
        </div>
    )
}

export default Movies
