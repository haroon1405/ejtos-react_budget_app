import React, { useContext, useState } from 'react';
import { useAppContext } from '../hooks/useAppContext';

const Dropdown = () => {
    const { currency , dispatch } = useAppContext();
    // const [newCurrency, setNewCurrency] = useState(currency);
    const handleCurrencyChange = (event) => {
        // setNewCurrency(event.target.value)
        // console.log(newCurrency)
        dispatch({type:'CHG_CURRENCY' , payload: event.target.value})
        console.log(currency)
    }
    return (
<div class="dropdown">
  <button class="btn btn-lg btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    
    <li><button class="dropdown-item" onClick={handleCurrencyChange} value="$">$ Dollor</button></li>
    <li><button class="dropdown-item" onClick={handleCurrencyChange} value="£">£ Pound</button></li>
    <li><button class="dropdown-item" onClick={handleCurrencyChange} value="€">€ Euro</button></li>
    <li><button class="dropdown-item" onClick={handleCurrencyChange} value="₹">₹ Rupee</button></li>
  </ul>
</div>
    );
};
export default Dropdown;
