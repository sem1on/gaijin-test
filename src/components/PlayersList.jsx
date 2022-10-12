import React from 'react';

import '../styles/PlayersList.css';
import Player from './Player';

const PlayersList = () => {
    return (
        <div className='players-list'>
            <h1 className='list-title'>Список игроков</h1>
            <div className='list-header'>
                <div className='list-desc'>Имя</div>
                <div className='list-desc'>Фракция</div>
                <div className='list-desc'>Уровень</div>
                <div className='list-desc'>Скил</div>
                <div className='list-desc'>Пpемиум</div>
                <div className='list-desc'>Изменить/Удалить</div>
            </div>
            <div className='list-items'>
                <Player/>

            </div>
        </div>
    );
};

export default PlayersList;