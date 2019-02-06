import React, { Component } from 'react';
import uuid from 'uuid/v1';

import Input from './Input';
import ItemsList from './ItemsList';
import Button from './Button';

class Expenses extends Component {
    constructor(props) {
        super(props);

        this.onCurrentNameChange = this.onCurrentNameChange.bind(this);
        this.onCurrentPriceChange = this.onCurrentPriceChange.bind(this);
        this.onAddExpense = this.onAddExpense.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.onRemoveAll = this.onRemoveAll.bind(this);

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
        const newExpense = {
            name: this.state.currentNameValue,
            price: this.state.currentPriceValue,
            id: uuid()
        }

        this.setState(prevState => ({
            expenses: [...prevState.expenses, newExpense],
            currentNameValue: '',
            currentPriceValue: ''
        }))
    }

    onRemove(id) {
        console.log(id);

        this.setState(prevState => ({
            expenses: prevState.expenses.filter(expense => {
                return id !== expense.id;
            })
        }))
    }

    onRemoveAll() {
        this.setState({
            expenses: []
        })

    }

    render() {
        console.log(this.state);

        const currentSum = this.state.expenses.map(expense => Number(expense.price)).reduce((acc, value) => acc + value, 0);

        return (
            <div className="expenses">
                <Input
                    type="text"
                    id="name"
                    placeholder="name"
                    labelText="Your expense"
                    value={this.state.currentNameValue}
                    onChange={this.onCurrentNameChange}
                />

                <Input
                    type="number"
                    id="price"
                    placeholder="price"
                    labelText="price"
                    value={this.state.currentPriceValue}
                    onChange={this.onCurrentPriceChange}
                />

                <Button onClick={this.onAddExpense}>Add</Button>

                <ItemsList itemsList={this.state.expenses} onClick={this.onRemove} />

                <Button onClick={this.onRemoveAll}>Remove All</Button>

                <p>{`${currentSum} zl.`}</p>
            </div>
        )
    }
}

export default Expenses;