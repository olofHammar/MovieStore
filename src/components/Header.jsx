import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import styles from '../styles/header.css';

function Header() {

    const name = useSelector(state => state.profile.name);
    return (
        <div className="headerContainer">
            <Link to="/" className="headerLink">
             Welcome Axel {name}
            </Link>
            <Link to="/cart" className="headerLink">
             Cart
            </Link>
        </div>
    )
}

export default Header
