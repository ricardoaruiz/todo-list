import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

export default props => (
    <nav className="todo-list-menu">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </nav>
)