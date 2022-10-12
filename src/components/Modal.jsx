import React from 'react';

import '../styles/Modal.css';

const Modal = () => {
    return (
        <form className='madal'>
            <h2 className='madal-title'>Карточка игрока</h2>

            <div className='modal-block'>
                <legend className='modal-descr' for="name">Имя игрока:</legend>
                <input className='modal-input' id='name' type="text" placeholder='Введите имя'/>
            </div>
            <div className='modal-block'>
                <legend className='modal-descr' for="frak">Фракция:</legend>
                <select className='modal-frak-slct' name="frak" id="frak">
                    <option value="">-- Выберите фракцию --</option>
                    <option value="petersburg">Мехаик</option>
                    <option value="samara">Медик</option>
                    <option value="perm">Мафия</option>
                    <option value="novosibirsk">Шериф</option>
                </select>
            </div>
            <div className='modal-block'>
                <legend className='modal-descr' for="level">Уровень:</legend>
                <input className='modal-input' id='level' type="number" placeholder='Введите уровень' defaultValue={1} max='100' min={1}/>
            </div>

            <div className='modal-skill'>
                <legend className='modal-descr'>Ваш основной скил:</legend>

                <div className='modal-skill-items'>
                    <div>
                        <input className='modal-skill-input' type="radio" id="contactChoice1" name="contact" value="email"/>
                        <label className='modal-skill-label' for="contactChoice1">Магия</label>
                    </div>
                    <div>
                        <input className='modal-skill-input' type="radio" id="contactChoice1" name="contact" value="email"/>
                        <label className='modal-skill-label' for="contactChoice1">Сила</label>
                    </div>
                    <div>
                        <input className='modal-skill-input' type="radio" id="contactChoice1" name="contact" value="email"/>
                        <label className='modal-skill-label' for="contactChoice1">Выносливость</label>
                    </div>
                </div>
            </div>

            <div className='modal-prem'>
                <legend className='modal-descr'>Премиум: </legend>
                <div>
                    <input className='modal-prem-iput' type="checkbox" id="prem" name="prem"/>
                    <label className='modal-skill-label' for="prev">Да</label>
                </div>
            </div>
            <button className='form-btn'>Ok</button>
        </form>
    );
};

export default Modal;