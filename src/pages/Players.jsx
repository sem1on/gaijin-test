import React, { useState, useEffect } from 'react';

import Modal from '../components/Modal';
import PlayersList from '../components/PlayersList';

import '../App.css';


const Players = () => {

    const [players, setPlayers] = useState(
        JSON.parse(localStorage.getItem('players')) || []
    );
    const [modalActive, setModalActive] = useState(false);

    useEffect(() => {
        localStorage.setItem('players', JSON.stringify(players))
    }, [players]);

    const onModal = () => {
        setModalActive(!modalActive);
    };

    const onAdd = (player) => {
        const newPlayer = {
            id: Date.now(), 
            name: player.name,
            frak: player.frak,
            level: player.level, 
            prem: player.prem,
        }
        setPlayers([...players, newPlayer])
    }

    const onRemove = (player) => {
        setPlayers(players.filter(p => p.id !== player.id))
    }

    const onChengePlayer = (id, prop, val) => {
        setPlayers(players.map(player => {
            if(player.id === id) {
                return {...player, [prop]: val }
            } 
            return player
        }))
    }

    const onCheckPlayer = (id, val) => {
        setPlayers(players.map(player => {
            if(player.id === id) {
                return {...player, prem: val }
            } 
            return player
        }))
    }

    return (
        <div className='app'>
            <PlayersList 
                onCheckPlayer={onCheckPlayer}
                onChengePlayer={onChengePlayer}
                onModal={onModal} 
                players={players} 
                onRemove={onRemove} />
            <Modal 
                modalActive={modalActive} 
                onModal={onModal} 
                onAdd={onAdd}/>
        </div>
    );
}

export default Players;
