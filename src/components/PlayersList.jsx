import React from 'react';

import Player from './Player';

import '../styles/PlayersList.css';


const PlayersList = ({ onChengePlayer, onModal, players, onRemove, onCheckPlayer }) => {

    return (
        <div className='players-list'>
            <h1 className='list-title'>Список игроков</h1>
            <button onClick={onModal} className='add-btn'>Добавить игрока</button>
            <div className='list-header'>
                <div className='list-desc'>Имя</div>
                <div className='list-desc'>Фракция</div>
                <div className='list-desc'>Уровень</div>
                <div className='list-desc'>Пpемиум</div>
                <div className='list-desc'>Удалить</div>
            </div>
            {players.length ? 
                <div className='list-items'>
                    {players.map((player) => (
                        <Player 
                            player={player} 
                            key={player.id} 
                            onRemove={onRemove} 
                            onChengePlayer={(e) => onChengePlayer(player.id, e.currentTarget.getAttribute('data-title'), e.currentTarget.value)}
                            onCheckPlayer={(e) => onCheckPlayer(player.id, e.target.checked)}
                            />
                    ))}
                </div>
                :
                <div className='list-desc' style={{ marginTop: '50px'}}> Игроков пока нет... </div>
            }
        </div>
    );  
};

export default PlayersList;
