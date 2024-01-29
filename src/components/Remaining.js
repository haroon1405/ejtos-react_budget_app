import React, { useContext } from 'react';
import { useAppContext } from '../hooks/useAppContext';
const Remaining = () => {
    const { expenses, budget,currency } = useAppContext();
    const totalExpenses = expenses.reduce((total, item) => {
        return (total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency} {budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;
