import axios from "axios";

// Calendar API Calls

export const fetchData = async (month) => {
    const result = await axios.get('/api/calendar/', {
        params: { month: month.number, year: month.year }
    });
    return result.data
}

export const fetchCalendarPublic = async (user_id, month) => {
    const result = await axios.get('/api/calendar_public/', {
        params: { month: month.number, year: month.year, user_id: user_id }
    })
    return result.data
}

export function patchRun (run_id, fields) {
    axios.patch('/api/runs/' + run_id + '/', fields)
    .then(response => {
        console.log(response)
    })
}

export function deleteRun (run_id) {
    axios.delete('/api/runs/' + run_id + '/')
    .then(response => {
        console.log(response)
    })
}

export function postRun (fields) {
    axios.post('/api/runs/', fields)
    .then(response => {
        console.log(response)
    })
}

// Account API Calls

export async function postRegistration (credentials) {
    const response = await axios.post('/api/accounts/registration/', credentials)
    console.log(response)
    return response
}

export async function postLogin (credentials) {
    try {
        const response = await axios.post('/api/accounts/login/', credentials)
        console.log(response)
        return response
    } catch {
        console.log('Invalid Credentials')
        return 'Invalid Credentials';
    }
}

export async function postLogout () {
    const response = await axios.post('/api/accounts/logout/')
    return response
}

// Profile API Calls

export const createUserProfile = async (fields) => {
    const result = await axios.post('/api/profiles/', fields)
    console.log(result)
    return result
}
export const getUserProfile = async () => {
    const result = await axios.get('/api/profiles/')
    console.log(result)
    return result.data;
}

export const getProfile = async (profile_id) => {
    const result = await axios.get('/api/profiles/' + profile_id + '/')
    return result.data
}

export function patchUserProfile (profile_id, fields) {
    axios.patch('api/profiles/' + profile_id + '/', fields)
    .then(response => {
        console.log(response);
    })
}

// Search Profiles API Calls

export const getProfiles = async (filters) => {
    const result = await axios.get('/api/search/', {
        params: filters
    })
    return result.data
}

// Stat API Calls

export const getStats = async (filters) => {
    const result = await axios.get('/api/stats/', {
        params: filters
    })
    return result.data
}

// Password Reset

export const resetPassword = async (fields) => {
    const params = { 'email': fields.email }
    console.log('Email: ' + fields.email)
    const response = await axios.get('/api/accounts/password-reset/', { params })
    console.log('Response: ' + response)
    return response
}

export const resetPasswordConfirm = async (fields, token) => {
    const response = await axios.patch('/api/accounts/password-reset-confirm/?token=' + token, fields)
    return response
}