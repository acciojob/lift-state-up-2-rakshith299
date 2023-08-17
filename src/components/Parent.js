import React, {useState} from "react";
import ReactDOM from "react-dom";
import Child from "./Child.js";
import "../styles/App.css";



const Parent = () => {
    const [inputValue, setInputValue] = useState("");

    return (
        <div className="parent-div">
            <h1>Parent Component</h1>
            <p>{inputValue}</p>

            <Child setInputValue = {setInputValue}/>
        </div>
    )
}

export default Parent;