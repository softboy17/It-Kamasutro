import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (

        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeclassname={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeclassname={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings">Settings</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to = '/users'>Users</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;