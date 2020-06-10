import React from 'react';

import logo from '../../assets/logo.svg';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';

import './Main.css';

export default function Main({ match }) { //* inside the match you will have all parameters that was sent to this route
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            <ul>
                <li>
                    <img src="https://avatars0.githubusercontent.com/u/51806895?v=4" alt="Profile image" />
                    <footer>
                        <strong>Wanderson Castro</strong>
                        <p>Web developer, formed by BCIT, Canada. Passion for solve problem solving and Information ​​Technology development. Always learning more !</p>
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
                <li>
                    <img src="https://avatars0.githubusercontent.com/u/51806895?v=4" alt="Profile image" />
                    <footer>
                        <strong>Wanderson Castro</strong>
                        <p>Web developer, formed by BCIT, Canada. Passion for solve problem solving and Information ​​Technology development. Always learning more !</p>
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
                <li>
                    <img src="https://avatars0.githubusercontent.com/u/51806895?v=4" alt="Profile image" />
                    <footer>
                        <strong>Wanderson Castro</strong>
                        <p>Web developer, formed by BCIT, Canada. Passion for solve problem solving and Information ​​Technology development. Always learning more !</p>
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
            </ul>
        </div>
    )
}