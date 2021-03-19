import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="Header">
            <nav className="NavItem">
                <Link to="/home">Home</Link>
                <Link to="/destination">Destination</Link>
                <Link to="/Blog">Blog</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/login" className="Login">Login</Link>
            </nav>
        </div>
    );
};

export default Header;