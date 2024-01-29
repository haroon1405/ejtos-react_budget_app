import React, { useContext, useState } from 'react';
import { useAppContext } from '../hooks/useAppContext';

const Budget = () => {
    const { currency, budget , dispatch } = useAppContext();
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value)
        dispatch({type:'SET_BUDGET' , payload: event.target.value})
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
