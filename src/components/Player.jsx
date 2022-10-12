import React from 'react';

import '../styles/Player.css';

const Player = () => {
    return (
        <div className='player-header'>
            <div className='player-desc'>Имя</div>
            <div className='player-desc'>Фракция</div>
            <div className='player-desc'>Уровень</div>
            <div className='player-desc'>Скил</div>
            <div className='player-desc'>Пpемиум</div>
            <div className='player-desc'>
                <button className='player-btn'>Изменить </button>
                <span> / </span>
                <button className='player-btn'> Удалить</button>
            </div>
        </div>
    );
};

export default Player;