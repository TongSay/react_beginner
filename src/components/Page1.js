import React from "react";

function Page1 () {
    const page1 = () => {
        console.log("Hello!");
      }
    return (
        <div>
            <h3>This is branch Pro</h3>
            <h3>This is Hello Component</h3>
            <h3>This is Hello Component</h3>
            <h3>This is Hello Component</h3>
            <h3>This is Hello Component</h3>
            <button onClick={page1}>Plese Click me!</button>
        </div>
    )
}

export default Page1;