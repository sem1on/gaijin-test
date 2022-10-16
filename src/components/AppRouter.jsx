import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthContext } from '../context/context';

import Login from '../pages/Login';
import Players from '../pages/Players';

import '../App.css';


const AppRouter = () => {

    const {isAuth} = useContext(AuthContext);
    
    return (
        isAuth
            ?
            <Routes>
                <Route path='/players' element={<Players/>}/>
                <Route
                    path="*"
                    element={<Navigate to="/players" replace />}
                />
            </Routes>
            :
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route
                    path="*"
                    element={<Navigate to="/login" replace />}
                />
            </Routes> 
    );
};

export default AppRouter;
