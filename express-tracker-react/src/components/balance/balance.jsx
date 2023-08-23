import React from 'react'
import './balance.css'

const Balance = ({balance, income, expense}) => {
  return (
    <div className="balance">
        <div className="total_balance">
            <p>Your Balance</p>
            <h2>${balance}</h2>
        </div>
        <div className="balance_price">
            <div className="income">
                <h6>INCOME</h6>
                <p>${income}</p>
            </div>
            <div className='line'></div>
            <div className="expense">
                <h6>EXPENSE</h6>
                <p>${expense}</p>
            </div>
        </div>
    </div>
  )
}

export default Balance