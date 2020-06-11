import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';

import './Main.css';

export default function Main({ match }) { //* inside the match you will have all parameters that was sent to this route
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('devs', {
                headers: {
                    user: match.params.id
                },
            })

            setUsers(response.data);
        }
        loadUsers();
    }, [match.params.id]) // * Everytime that the params id be changed the function will be executed.

    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        <img src={user.avatar} alt={user.name} />
                        <footer>
                            <strong>{user.name}</strong>
                            <p>{user.bio}</p>
                        </footer>

                        <div className="buttons">
                            <button type="button">
                                <img src={like} alt="Like" />
                            </button>
                            <button type="button">
                                <img src={dislike} alt="Dislike" />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}