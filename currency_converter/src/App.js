import React, { useState } from 'react';
import './App.css';
import InputBox from './components/inputBox';
import useCurrency from './hooks/useCurrency';
function App() {
  const [amount,setAmount]=useState(0);
  const [from,setFrom]=useState('usd');
  const [to,setTo]=useState('inr');
  const [convertedAmount,setConvertedAmount]=useState(0);

  const Currency=useCurrency(from)
  const options=Object.keys(Currency);

  const convert=()=>{
    setConvertedAmount(amount*Currency[to])
  }
  
  const swap=()=>{
    setFrom(to);
    setTo(from);
    setAmount(0);
    setConvertedAmount(0);
  }
  return (
    <div className='container'>
        <form className='card'onSubmit={(e)=>{
              e.preventDefault();
              convert()
            }}>
        

            <InputBox
            label="from"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency)=>setFrom(currency)}
            onAmountChange={(amount)=>setAmount(amount)}
            selectedCurrency={from}
            />
            <button className="swapButton" onClick={()=>swap()} >Swap</button>
            <InputBox
            label="to"
            currencyOptions={options}
            amount={convertedAmount}
            onCurrencyChange={(currency)=>setTo(currency)}
            onAmountChange={(amount)=>setAmount(amount)}
            selectedCurrency={to}
            amountDisabled
            />
            <button className="convertButton" type='submit'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      
  )
}

export default App