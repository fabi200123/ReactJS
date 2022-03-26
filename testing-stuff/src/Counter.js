import React, {useState} from 'react'

export default function Counter(){
    const [count, setCount] = useState(0);

    function showParity(count){
        return (count % 2) ? "even" : "odd";
    }

    return(
        <>
            <div>
                <button onClick={() => setCount(count + 1)} >+</button>
                <label type="text"> {count} </label>
                <button onClick={() => setCount(count - 1)} >-</button>
            </div>
            <div>
                <label type="text">The number is {showParity(count)}</label>
            </div>
            
        </>
        
    )
}