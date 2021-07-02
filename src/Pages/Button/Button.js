import React, { useState } from 'react'
import './Button.css'

const Button = (props) => {

    const increase = () => {
        props.increase(props.data + 1)
    }

    const reset = () => {
        props.increase("0")

    }

    return (
        <div>
            {/* <div>{props.data}</div> */}
            <button className="custom_button_clickme" onClick={increase}>click me</button>
            <button className="custom_button_reset ml-3" onClick={reset}>Reset</button>
        </div>
    )
}

export default Button
