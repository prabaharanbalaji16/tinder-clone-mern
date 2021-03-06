import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>
            <img
             classNamae="header__logo"
             src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg"
             alt="" />

             <IconButton>
                <ForumIcon fontSize ="large" className="header__icon" />
             </IconButton>
        </div>
    )
}

export default Header
