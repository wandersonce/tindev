import React from 'react';

import logo from '../../assets/logo.svg';

import './Login.css';

export default function Login() {
    return (
        <div className="login-container">
            <form>
                <img src={logo} alt="tindev logo" />
                <input type="text" placeholder="Github username" />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};