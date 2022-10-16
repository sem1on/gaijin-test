import React, { useContext } from 'react';

import { AuthContext } from '../context/context';

import '../styles/Login.css';


const Login = () => {

    const {setIsAuth} = useContext(AuthContext);

    const login = (e) => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <div className='login'>
            <form className='login-form' onSubmit={login}>
                <h3 className='login-title'>Авторизация</h3>
                <input className='login-input' type="email" placeholder='Введите логин' required/>
                <input className='login-input' type="text" placeholder='Введите пароль' required/>
                <button className='log-btn' type='submit'>Войти</button> 
            </form>
            
        </div>
    );
};

export default Login;
