import React from 'react';

import '../styles/PlayersList.css';
import Player from './Player';

const PlayersList = ({ onModal, players, onRemove }) => {

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
            {players.length ? 
                <div className='list-items'>
                    {players.map((player) => (
                        <Player onModal={onModal} player={player} key={player.id} onRemove={onRemove}/>
                    ))}
                </div>
                :
                <div className='list-desc' style={{ marginTop: '50px'}}> Игроков пока нет... </div>
            }
        </div>
    );  
};

export default PlayersList;