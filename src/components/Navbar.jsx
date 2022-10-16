import React, { useContext } from 'react';

import { AuthContext } from '../context/context';

import '../styles/Navbar.css';


const Navbar = () => {

    const {setIsAuth} = useContext(AuthContext);

    const logOut = () => {
        setIsAuth(false);
        localStorage.setItem('auth', 'false')
    }

    return (
        <div className='navbar'>
            <button onClick={logOut} className='login-btn'>Выйти</button>
        </div>
    );
};

export default Navbar;
