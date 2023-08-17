import React, {useState} from "react";
import ReactDOM from "react-dom";
import "../styles/App.css";

const Child = ({setInputValue}) => {
    return (
        <div className="child-div">
            <h1>Child Component</h1>

            <input type = "text" onChange={(e) => setInputValue(e.target.value)}/>
        </div>
    )
}

export default Child;