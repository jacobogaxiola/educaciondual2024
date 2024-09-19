import { useState } from "react";

export const counter = () => {
    const [counter, setCounter] = useState(0)
    const onClick = () => {
        setCounter( counter+1 )
    }
    return (
        <div>
            <p>{counter}</p>
            <button onClick={onClick}>+1</button>
        </div>
    )
        
    
}