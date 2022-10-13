import React from 'react';

import '../styles/Player.css';

const Player = ( {onModal, player, onRemove } ) => {
    return (
        <div className='player-header'>
            <div className='player-desc'>{player.name}</div>
            <div className='player-desc'>{player.frak}</div>
            <div className='player-desc'>{player.level}</div>
            <div className='player-desc'>{player.skill}</div>
            <div className='player-desc'>{player.prem}</div>
            <div className='player-desc'>
                <button onClick={onModal} className='player-btn'>Изменить </button>
                <span> / </span>
                <button onClick={() => onRemove(player)} className='player-btn'> Удалить</button>
            </div>
        </div>
    );
};

export default Player;