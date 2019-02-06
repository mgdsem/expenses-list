import React, { Component } from 'react';

import Button from './Button';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.onPlus = this.onPlus.bind(this);
        this.onMinus = this.onMinus.bind(this);

        this.state = {
            value: 0
        }
    }

    onPlus() {
        this.setState(prevState => ({
            value: prevState.value + 1
        }))
    }

    onMinus() {
        this.setState(prevState => ({
            value: prevState.value - 1
        }))
    }

    generateMessage() {
        if (this.state.value === 10) {
            return 'I am 10';
        } else {
            return this.state.value > 10 ? 'I am bigger than 10' : 'I am smaller than 10';
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.value}</p>
                <Button onClick={this.onPlus}>+</Button>
                <Button onClick={this.onMinus}>-</Button>

                {/* {this.state.value >= 10 && (
                    <p>i'm bigger than 10</p>
                )} */}

                {/* <p>{this.state.value > 10 ? 'I am bigger than 10' : 'I am smaller than 10'}</p> */}

                <p>{this.generateMessage()}</p>

            </div>
        )
    }
}


export default Counter;