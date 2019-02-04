import React, { Component } from 'react';

import Input from './Input';
import ItemsList from './ItemsList';

class Expenses extends Component {
    constructor(props) {
        super(props);

        this.onCurrentNameChange = this.onCurrentNameChange.bind(this);
        this.onCurrentPriceChange = this.onCurrentPriceChange.bind(this);
        this.onAddExpense = this.onAddExpense.bind(this);

        this.state = {
            expenses: [],
            currentNameValue: '',
            currentPriceValue: ''
        }
    };

    onCurrentNameChange(e) {
        this.setState({ currentNameValue: e.target.value })
    }

    onCurrentPriceChange(e) {
        this.setState({ currentPriceValue: e.target.value })
    }

    onAddExpense(e) {
        e.preventDefault();
        const newExpense = {
            text: `${this.state.currentNameValue} - ${this.state.currentPriceValue} zl.`
        }
    }

    render() {
        console.log(this.state);

        return (
            <div className="expenses">
                <Input
                    id="name"
                    placeholder="name"
                    value={this.state.currentNameValue}
                    onChange={this.onCurrentNameChange}
                />
                <Input
                    id="price"
                    placeholder="price"
                    value={this.state.currentPriceValue}
                    onChange={this.onCurrentPriceChange}
                />
                {/* <ItemsList onChange={this.onAddExpense} */}
            </div>
        )
    }
}

export default Expenses;