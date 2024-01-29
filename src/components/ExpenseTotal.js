import React, { useContext } from 'react';
import { useAppContext } from '../hooks/useAppContext';
const ExpenseTotal = () => {
    const { expenses, currency } = useAppContext();
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {currency} {totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;
