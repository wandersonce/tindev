import React, { useState } from 'react';

import logo from '../../assets/logo.svg';

import api from '../../services/api';

import './Login.css';

export default function Login({ history }) {
    const [username, setUsername] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/devs', {
            username,
        });

        console.log(response);

        history.push('/main')
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="tindev logo" />
                <input
                    type="text"
                    placeholder="Github username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};