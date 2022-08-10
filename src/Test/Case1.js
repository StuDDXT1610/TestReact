import React, {useState} from 'react'

export default function CounterTest(){
    
    const [result, setResult] = useState(0)
    const [amount, setAmount] = useState('')
	const Plus = () => {
        let newResult = result + amount
		setResult(newResult)	
        console.log(newResult)
	}

    const Subtract = () => {
		let newResult = result - amount
		setResult(newResult)	
        console.log(newResult)	
	}

    const changeAmount = (e) =>{
        console.log(amount)
        
        setAmount(Number(e.target.value))
        
    }

	return (
		<div>
			<div> <h3>Result</h3>{result}</div>
            <input type="number" placeholder='enter amount' value = {amount} onChange={changeAmount} />
			<button onClick={Plus}>+</button>
            <button onClick={Subtract}>-</button>
		</div>
	)
}