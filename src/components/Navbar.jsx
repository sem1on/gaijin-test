import React from 'react';

import '../styles/Navbar.css';

const Navbar = ({ onModal }) => {
    return (
        <div className='navbar'>
            <button onClick={onModal} className='add-btn'>Добавить игрока</button>
            <button className='login-btn'>Выйти</button>
        </div>
    );
};

export default Navbar;