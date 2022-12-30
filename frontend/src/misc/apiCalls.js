import axios from "axios";

export const fetchData = async (month, setDays) => {
    const result = await axios.get('/api/calendar/', {
        params: { month: month.number, year: month.year }
    });
    setDays(result.data);
}