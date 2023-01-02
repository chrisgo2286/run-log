import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calendar from './components/calendar/calendar';
import NavBar from './components/navBar/navBar';
import Home from './components/home/home';
import AddRun from './components/runDetail/addRun';
import UpdateRun from './components/runDetail/updateRun';
import Register from './components/register/register';
import Login from './components/login/login';
import axios from 'axios';
import { UserContext, MonthContext } from './index.js';
import { getMonthData } from './misc/calendarFunctions';

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

    const date = new Date()
    const curMonth = getMonthData(date)
    const [month, setMonth] = useState(curMonth)

    return (
        <React.Fragment>
            <UserContext.Provider value={ [user, setUser] }>
            <MonthContext.Provider value={ [month, setMonth] }>
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={ <Home /> } />
                        <Route path='/calendar' element={ <Calendar /> } />
                        <Route path='/add_run' element={ <AddRun /> } />
                        <Route path='/update_run' element={ <UpdateRun /> } />
                        <Route path='/register' element={ <Register /> } />
                        <Route path='/login' element={ <Login /> } />
                    </Routes>
                </Router>
            </MonthContext.Provider>
            </UserContext.Provider>
        </React.Fragment>
    ); 
}
