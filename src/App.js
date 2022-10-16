import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthContext } from './context/context';

import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';

import './App.css';


const App = () => {

    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('auth')){
            setIsAuth(true)
        };
    }, []);

    return (

        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
