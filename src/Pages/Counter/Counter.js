import React, { Component } from 'react'
import Button from '../Button'

class Counter extends Component {

    constructor() {
        super()
        this.state = {
            counter: 0,
        }
    }
    
    render() {

        return (
            <div>
                <h1>Start Stop {this.state.counter}</h1>
                <Button data={this.state.counter} increase={(childCounter) => { this.setState({ counter: childCounter }) }} />
            </div>
        )
    }
}

export default Counter