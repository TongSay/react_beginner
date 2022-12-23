import React from "react";

function Hello () {
    const sayHello = () => {
        console.log("Hello!");
      }
    return (
        <div>
            <h3>This is Hello test git</h3>
            <h3>This is Hello Component</h3>
            <button onClick={sayHello}>Hello</button>
        </div>
    )
}

export default Hello;