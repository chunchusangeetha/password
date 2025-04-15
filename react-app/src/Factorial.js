import React, { useState } from "react";

export default function Factorial() {
    const [value, setValue] = useState("");
    const [num, setNum] = useState("");

    const factorialclick = (event) => {
        event.preventDefault();
        let fact = 1;
        for (let i = 1; i <= num; i++) {
            fact = fact * i;
        }
        if (num) {
            setValue("Factorial of " + num + " is " + fact);
            setNum(""); 
        }else {
            setValue("Please enter a number");
        }
    };

    return (
        <div className="factorial">
            <h2>Factorial</h2>
            <div className="factorial-input">
                <input
                    type="text"
                    placeholder="Enter the value"
                    value={num}
                    onChange={(e) => setNum(e.target.value)} // Update state on input change
                />
                <button onClick={factorialclick}>Calculate</button>
                {value && <p>{value}</p>}
            </div>
        </div>
    );
}