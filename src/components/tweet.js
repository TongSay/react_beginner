import React from "react";

function Tweet ({name,message}) {
    
    return (
        <div className="tweet">
            <h4>{name}</h4>
            <p>{message}</p>
            <h4>Number of linkes</h4>
        </div>
    )
}


export default Tweet;