import React from 'react';
import classes from './Header.module.css';
const Header = () => {
    return (
            <header className={classes.header}>
                <img src="https://seeklogo.com/images/S/spider-man-comic-new-logo-322E9DE914-seeklogo.com.png"
                     alt="logo"/>
            </header>
    );
};

export default Header;