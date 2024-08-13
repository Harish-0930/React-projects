import React from 'react'
import './inputBox.css'
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions=[],
  selectedCurrency="usd",
  amountDisabled=false,
}

) {
  return (
      <div className='box'>
        <div className='inputContainer'>
          <label htmlFor="amount" className='label'>{label}</label><br/>
          <input id="amount" 
          type='number'
          className='inputField'
          placeholder='0'
          disabled={amountDisabled}
          value={amount}
          onChange={(e)=>onAmountChange&&onAmountChange(Number(e.target.value))}
          />
        </div>
        <div className='selectBox'>
          <label htmlFor="currencyType" className='label'>CurrencyType</label><br/>
          <select className="currencyType" id="currencyType"
          value={selectedCurrency}
          onChange={(e)=>onCurrencyChange&&onCurrencyChange(e.target.value)}
          >
            {currencyOptions.map((currency)=>(
              <option key={currency} value={currency}>{currency}</option>
            ))}

          </select>
        </div>
      </div>
    
  )
}

export default InputBox