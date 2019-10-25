import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import Menu from '../menu/Menu';

export default props => (
    <header className="todo-list-header">
        <div className="todo-list-header__logo">
            <Link to="/">Logo</Link>
        </div>
        <Menu />
    </header>
)