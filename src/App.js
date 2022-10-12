import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PlayersList from './components/PlayersList';

function App() {
  return (
    <div className='app'>
        <Navbar/>
        <PlayersList/>
    </div>
  );
}

export default App;
