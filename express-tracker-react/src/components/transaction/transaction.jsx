import React from 'react'
import './transiction.css'

const Transaction = ({ addTransaction }) => {
    const [text, setText] = React.useState("")
    const [amount, setAmount] = React.useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();
        addTransaction({ text, amount: parseFloat(amount) });
        setText('');
        setAmount(0);
    }


    return (
        <div className="transation">
            <h2>Add New Transaction</h2>
            <hr/>
            <form onSubmit={handleSubmit}>
            <div className="price_name">
                    <h4>Text</h4>
                    <input type="text" value={text} placeholder='Enter text' onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="price_amount">
                    <h5>Amount <br/> (negative - expense, possitive - income)</h5>
                    <input type="number" value={amount} placeholder='Enter text' onChange={(e) => setAmount(e.target.value)}/>
            </div>
            <button type='submit'>Add transaction</button>
            </form>
        </div>
    )
}

export default Transaction