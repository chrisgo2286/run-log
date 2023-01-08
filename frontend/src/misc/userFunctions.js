export function updateLocalStorage (token, username) {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
}

export function updateUser (token, username, oldUser, setUser) {
    const newUser = {
        username: username,
        isLoggedIn: true,
        token: token,
    }
    setUser({ ...oldUser, ...newUser });
}