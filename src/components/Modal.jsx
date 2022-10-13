import React, { useState } from 'react';

import '../styles/Modal.css';

const Modal = ({ modalActive, onModal, onAdd }) => {

    const [player, setplayer] = useState({
        name: '', 
        frak: '', 
        level: '', 
        skill: '', 
        prem: false,
    });

    const addNewPlayer = (e) => {
        e.preventDefault();
        const newPlayer = {
            ...player, id: Date.now()
        }
        onAdd(newPlayer)
        setplayer({
            name: '', 
            frak: '', 
            level: '', 
            skill: '', 
            prem: false,
        })
    };

    let clazz;

    if (modalActive){
        clazz = 'modal active'
    } else {
        clazz = 'modal'
    };

    return (
        <div className={clazz} onClick={onModal}>
            <form onSubmit={addNewPlayer}>
                <div className='modal-form' onClick={(e) => e.stopPropagation()}>
                    <h2 className='madal-title'>Карточка игрока</h2>

                    <div className='modal-block'>
                        <legend className='modal-descr' for="name">Имя игрока:</legend>
                        <input 
                            className='modal-input' 
                            id='name' 
                            type="text" 
                            placeholder='Введите имя' 
                            value={player.name} 
                            onChange={e => setplayer({...player, name: e.target.value})}
                            required
                            minLength="3"/>
                    </div>

                    <div className='modal-block'>
                        <legend className='modal-descr' for="frak">Фракция:</legend>
                        <select 
                            className='modal-frak-slct' 
                            required
                            name="frak" 
                            id="frak" 
                            value={player.frak} 
                            onChange={e => setplayer({...player, frak: e.target.value})}
                            >
                                <option value="">-- Выберите фракцию --</option>
                                <option value="Мехаик">Мехаик</option>
                                <option value="Медик">Медик</option>
                                <option value="Мафия">Мафия</option>
                                <option value="Шериф">Шериф</option>
                        </select>
                    </div>

                    <div className='modal-block'>
                        <legend className='modal-descr' for="level">Уровень:</legend>
                        <input 
                            className='modal-input' 
                            id='level' 
                            type="number" 
                            placeholder='Введите уровень' 
                            max='100' min='1' 
                            value={player.level} 
                            onChange={e => setplayer({...player, level: e.target.value})}
                            required/>
                    </div>

                    <div className='modal-skill'>
                        <legend className='modal-descr'>Ваш основной скил:</legend>

                        <div className='modal-skill-items'>
                            <div>
                                <input 
                                    className='modal-skill-input' 
                                    type="radio" id="contactChoice1" 
                                    required
                                    name="contact" 
                                    value="Магия" 
                                    onChange={e => setplayer({...player, skill: e.target.value})}/>
                                <label className='modal-skill-label' for="contactChoice1">Магия</label>
                            </div>
                            <div>
                                <input 
                                    className='modal-skill-input' 
                                    type="radio" id="contactChoice2"  
                                    name="contact" 
                                    required
                                    value="Сила" 
                                    onChange={e => setplayer({...player, skill: e.target.value})}/>
                                <label className='modal-skill-label' for="contactChoice2">Сила</label>
                            </div>
                            <div>
                                <input 
                                    className='modal-skill-input' 
                                    type="radio" id="contactChoice3" 
                                    name="contact" 
                                    required
                                    value="Выносливость" 
                                    onChange={e => setplayer({...player, skill: e.target.value})}/>
                                <label className='modal-skill-label' for="contactChoice3">Выносливость</label>
                            </div>
                        </div>
                    </div>

                    <div className='modal-prem'>
                        <legend className='modal-descr'>Премиум: </legend>
                        <div>
                            <input
                                className='modal-prem-iput' 
                                type="checkbox" 
                                id="prem" 
                                name="prem" 
                                checked={player.prem}
                                value="+" 
                                onChange={e => setplayer({...player, prem: e.target.value})}
                                />
                            <label className='modal-skill-label' for="prev">Да</label>
                        </div>
                    </div>
                    <button type='submit' className='form-btn'>Ok</button>
                </div>
            </form>
        </div> 
        
    );
};

export default Modal;