import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';

import './Main.css';

export default function Main({ match }) { //* inside the match you will have all parameters that was sent to this route
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('devs', { //! The second parameter on a get request will be the headers
                headers: {
                    user: match.params.id
                },
            })

            setUsers(response.data);
        }
        loadUsers();
    }, [match.params.id]) // * Everytime that the params id be changed the function will be executed.

    async function handleLike(id) {
        await api.post(`/devs/${id}/likes`, null, {  //! The second parameter on a post request is always a body, and the third one will be the headers
            headers: { user: match.params.id },
        })

        setUsers(users.filter(user => user._id !== id));
    }

    async function handleDislike(id) {
        await api.post(`/devs/${id}/dislikes`, null, {  //! The second parameter on a post request is always a body, and the third one will be the headers
            headers: { user: match.params.id },
        })

        setUsers(users.filter(user => user._id !== id));
    }

    return (
        <div className="main-container">
            <Link to="/">
                <img src={logo} alt="Tindev" />
            </Link>
            {users.length > 0 ? (
                <ul>
                    {users.map(user => (
                        <li key={user._id}>
                            <img src={user.avatar} alt={user.name} />
                            <footer>
                                <strong>{user.name}</strong>
                                <p>{user.bio}</p>
                            </footer>

                            <div className="buttons">
                                <button type="button" onClick={() => handleLike(user._id)} >
                                    <img src={like} alt="Like" />
                                </button>
                                <button type="button" onClick={() => handleDislike(user._id)} >
                                    <img src={dislike} alt="Dislike" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                    <did className="empty">
                        OMG, you just reach the end! :(
                    </did>
                )}
        </div>
    )
}