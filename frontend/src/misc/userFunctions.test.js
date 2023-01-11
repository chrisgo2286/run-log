import { useState } from 'react';
import { updateLocalStorage, updateUser, clearUser } from "./userFunctions";

const token = 'test123';
const username = 'tester';
let initialUser;
const setUser = jest.fn();

it('updateLocalStorage updates token in local storage', () => {
    updateLocalStorage(token, username)
    expect(localStorage.getItem('token')).toEqual(token);
    localStorage.clear() 
})

it('updateLocalStorage updates username in local storage', () => {
    updateLocalStorage(token, username)
    expect(localStorage.getItem('username')).toEqual(username);
    localStorage.clear()  
})

it('updateUser call setUser function', () => {
    updateUser(token, username, initialUser, setUser)
    expect(setUser).toBeCalled();
})

it('clearUser clears local storage and calls setUser function', () => {
    clearUser(initialUser, setUser);
    expect(localStorage.getItem('token')).toEqual(null)
    expect(localStorage.getItem('username')).toEqual(null)
    expect(setUser).toBeCalled();
})