"use client";
import { useState } from "react";

const LoginComponent = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Store username and password in local storage (for demonstration only).
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        // You might want to navigate to a different page or show a success message.
        console.log("User logged in:", username);
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginComponent;
