import React from "react";
export default function Factorial() {
    const [value, setValue] = React.useState("");
    const factorialclick = (event) => {
        event.preventDefault();
        let num = document.querySelector("input").value;
        let fact = 1;
        for (let i = 1; i <= num; i++) {
            fact = fact * i;
        }
        setValue("Factorial of " + num + " is " + fact)
        //alert("Factorial of " + num + " is " + fact);
        //console.log("Factorial clicked");
    }

    return (
        <div>
            <h2>Factorial</h2>
            <div>
                <input type="text" placeholder="enter the value" />
            </div>
            <div>
                <button onClick={factorialclick}>Calculate</button>
            </div>
            <div>
                <p>{value}</p>
            </div>
        </div>
    )
}