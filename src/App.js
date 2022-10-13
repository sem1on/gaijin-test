import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import PlayersList from './components/PlayersList';

const App = () => {

    const [players, setPlayers] = useState([])
    const [modalActive, setModalActive] = useState(false);

    const onModal = () => {
        setModalActive(!modalActive);
    };

    const onAdd = (newPlayer) => {
        setPlayers([...players, newPlayer]);
        setModalActive(false);
    };

    const onRemove = (player) => {
        setPlayers(players.filter(p => p.id !== player.id))
    }

    return (
        <div className='app'>
            <Navbar onModal={onModal}/>
            <PlayersList onModal={onModal} players={players} onRemove={onRemove}/>
            <Modal modalActive={modalActive} onModal={onModal} onAdd={onAdd}/>
        </div>
    );
}

export default App;
