import React, { useContext } from 'react'
import '../App.scss';
import { GlobalContext } from '../Context/GlobalContext';

export const Expenses = () => {
    const { lists } = useContext(GlobalContext);

    const prices = lists.map(listPrice => listPrice.price);
    const totalExpenses = prices.reduce((total, currPrice) => (total += currPrice), 0);
    console.log(totalExpenses)

    return (
        <div className="exp-expenses-container">
            <h2>Expected Expenses</h2>
            <h1>Rp. {totalExpenses}</h1>
        </div>
    )
}
