import React, {useState} from "react";

function State () {

    const [isRed, setRed] = useState(false);

    const [count, setCount] = useState(0)

    const change = () => {
        setCount(count + 1);
        setRed(!isRed);
    }
    
    return (
        <div className="state">
            <h1 className={isRed ? "red" : ""}> Change Color</h1>
            <button onClick={change}>Increment</button>
            <h4>{count}</h4>
        </div>
    )
}

export default State