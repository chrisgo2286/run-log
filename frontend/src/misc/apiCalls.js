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