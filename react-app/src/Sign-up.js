import React, { useState } from "react";

export default function SignUp() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [submittedUser, setSubmittedUser] = useState(null);

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Form submitted:", formData);
        setSubmittedUser(formData); // update displayed data
        setFormData({ name: "", email: "", password: "" }); // optional: reset form
    }

    return (
        <div>
            <div className="signup">
                <h2>Sign Up</h2>
                <form className="signup-input" onSubmit={handleSubmit}>
                    <input
                        onChange={handleChange}
                        type="text"
                        value={formData.name}
                        name="name"
                        placeholder="Enter your name"
                    />
                    <input
                        onChange={handleChange}
                        type="email"
                        value={formData.email}
                        name="email"
                        placeholder="Enter your email"
                    />
                    <input
                        onChange={handleChange}
                        type="password"
                        value={formData.password}
                        name="password"
                        placeholder="Enter your password"
                    />
                    <button type="submit">Sign Up</button>
                </form>

            </div>

            {submittedUser && (
                <div>
                    <h3>User Details</h3>
                    <p>Name: {submittedUser.name}</p>
                    <p>Email: {submittedUser.email}</p>
                    <p>Password: {submittedUser.password}</p>
                </div>
            )}
        </div>
    );
}
