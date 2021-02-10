import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const hanldeSubmit = async (e) => {
        e.preventDefault();

        const authObject = {
            "Project-ID": "7999f6db-b355-4669-88b7-2565e03d0b2c",
            "User-Name": username,
            "User-Secret": password,
        };
        try {
            await axios.get("https://api.chatengine.io/chats", {
                headers: authObject,
            });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch (error) {
            setError('Incorrect credentials')
        }
    };

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={hanldeSubmit}>
                    <input
                        className="input"
                        placeholder="User Name"
                        value={username}
                        type="text"
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                    <input
                        className="input"
                        placeholder="Your Password"
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div align="center">
                        <button className="button" type="submit" onSubmit={""}>
                            <span>Start Chating</span>
                        </button>
                    </div>
                    <h2 className="error" >
                        { error }
                    </h2>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
