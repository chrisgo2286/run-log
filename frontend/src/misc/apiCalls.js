import axios from "axios";

export const fetchData = async (month, setDays) => {
    const result = await axios.get('/api/calendar/', {
        params: { month: month.number, year: month.year }
    });
    setDays(result.data);
}

export function patchRun (run_id, fields) {
    axios.patch('/api/runs/' + run_id + '/', fields)
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

export async function postRegistration (credentials) {
    const response = await axios.post('/api/accounts/registration/', credentials)
    console.log(response)
    return response
}

export async function postLogin (credentials) {
    const response = await axios.post('/api/accounts/login/', credentials)
    console.log(response)
    return response
}

export async function postLogout () {
    const response = await axios.post('/api/accounts/logout/')
    console.log(response)
    return response
}