import React, { useState } from 'react';

import '../styles/Modal.css';


const Modal = ({ modalActive, onModal, onAdd }) => {

    const [player, setPlayer] = useState({
        name: '', 
        frak: '', 
        level: '', 
        prem: false,
    })

    const addNewPlayer = (e) => {
        e.preventDefault();
        onAdd(player);
        setPlayer({
            name: '', 
            frak: '', 
            level: '', 
            prem: false,
        })
        onModal();
    }

    const hendlerClose = () => {
        onModal();
        setPlayer({
            name: '', 
            frak: '', 
            level: '', 
            prem: false,
        })
    }

    let clazz;

    if (modalActive){
        clazz = 'modal active'
    } else {
        clazz = 'modal'
    };

    return (
        <div className={clazz} onClick={hendlerClose}>
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
                            onChange={e => setPlayer({...player, name: e.target.value})}
                            required
                            minLength="3"
                            maxLength="15"/>
                    </div>

                    <div className='modal-block'>
                        <legend className='modal-descr' for="frak">Фракция:</legend>
                        <select 
                            className='modal-frak-slct' 
                            required
                            name="frak" 
                            id="frak" 
                            value={player.frak}
                            onChange={e => setPlayer({...player, frak: e.target.value})}
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
                            onChange={e => setPlayer({...player, level: e.target.value})}
                            required/>
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
                                onChange={e => setPlayer({...player, prem: e.target.checked})}
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
