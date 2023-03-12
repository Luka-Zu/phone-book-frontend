import React, { useState, useContext } from "react";
import LoginService from "../services/LoginService";
import { AuthenticationContext } from "../Contexts/AuthenticationContext";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const {setToken} = useContext(AuthenticationContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const u = {
            "email" : email,
            "password": pass
        }

        console.log(email);
        console.log(pass);
        
        LoginService.loginUser(u).then((result) => {
            setToken(result.data)
            
        }).catch((err) => {
            console.log(err)
        });
    }

    return (
        <div className="auth-form-container ">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className="my-4" type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}