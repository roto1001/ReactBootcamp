import { useState } from "react";
import { RegisterButtons } from "./RegisterButtons.jsx";
import './LoginForm.css';

export function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    function clickHandler() {
        setShowPassword(!showPassword);
    }

    return (
        <>
            <p>Hello, welcome to my website</p>
            <div>
                <input placeholder="Email"></input>
            </div>
            <div>
                <input type={showPassword ? 'text' : 'password'} placeholder="Password"></input>
                <button onClick={clickHandler}>{showPassword ? "Hide" : "Show"}</button>
            </div>
            <RegisterButtons />
        </>
    );
}