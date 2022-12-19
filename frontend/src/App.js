import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calendar from './components/calendar';
import NavBar from './components/navBar';
import Home from './components/home';
import AddRun from './components/addRun';
import Register from './components/register';
import Login from './components/login';
import axios from 'axios';
import { UserContext } from './index.js';

export default function App () {
    axios.defaults.withCredentials = true
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = 'x-csrftoken'

    let token = localStorage.getItem('token');
    let username = localStorage.getItem('username');

    const [user, setUser] = useState({
        username: (username) ? username: '',
        isLoggedIn: (token) ? true: false,
        token: (token) ? token: '',
    })

    return (
        <React.Fragment>
            <UserContext.Provider value={ [user, setUser] }>
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={ <Home /> } />
                        <Route path='/calendar' element={ <Calendar /> } />
                        <Route path='/add_run' element={ <AddRun /> } />
                        <Route path='/register' element={ <Register /> } />
                        <Route path='/login' element={ <Login /> } />
                    </Routes>
                </Router>
            </UserContext.Provider>
        </React.Fragment>
    ); 
}
