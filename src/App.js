import React from 'react';
import './App.css';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import PlayersList from './components/PlayersList';

function App() {
  return (
    <div className='app'>
        <Navbar/>
        <PlayersList/>
        <Modal/>
    </div>
  );
}

export default App;
