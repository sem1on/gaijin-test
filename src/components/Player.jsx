import React from 'react';

import '../styles/Player.css';


const Player = ({ onChengePlayer, player, onRemove, onCheckPlayer }) => {

    return (
        <div className='player-header'>
            <div className='player-desc'>
                <input data-title="name" type="tet" className='player-name-input' onChange={onChengePlayer} defaultValue={player.name}/>
            </div>
            <div className='player-desc'>
                <select 
                    className='player-frak-slct' 
                    required
                    name="frak" 
                    id="frak" 
                    defaultValue={player.frak}
                    onChange={onChengePlayer}
                    data-title="frak"
                    >
                        <option value="">-- Выберите фракцию --</option>
                        <option value="Мехаик">Мехаик</option>
                        <option value="Медик">Медик</option>
                        <option value="Мафия">Мафия</option>
                        <option value="Шериф">Шериф</option>
                </select> 
            </div>
            <div className='player-desc'>
                <input 
                    className='player-level-input' 
                    data-title="level"
                    id='level' 
                    type="number" 
                    max='100' min='1' 
                    defaultValue={player.level} 
                    onChange={onChengePlayer}
                /> 
            </div>
            
            <div className='player-desc'>
                <input
                    className='player-prem-input' 
                    data-title="prem"
                    type="checkbox" 
                    id="prem" 
                    name="prem"
                    checked={player.prem}
                    onChange={onCheckPlayer}
                />
            </div>
            
            <div className='player-desc'>
                <button onClick={() => onRemove(player)} className='player-btn'> Удалить</button>
            </div>
        </div>
        
    );
};

export default Player;
