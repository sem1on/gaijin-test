import React from 'react';

import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <button className='add-btn'>Добавить игрока</button>
            <button className='login-btn'>Выйти</button>
        </div>
    );
};

export default Navbar;