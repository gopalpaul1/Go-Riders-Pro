import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div className="Header">
            <h2 className="ContentName">GoRidersPro</h2>
            <div className="NavItem">
                <Link to="/home">Home</Link>
                <Link to="/destination">Destination</Link>
                <Link to="/destination/blog">Blog</Link>
                <Link to="/destination/contact">Contact</Link>
                <Link to="/login" className="Login">Login</Link>
            </div>
        </div>
    );
};

export default Header;