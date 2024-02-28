import axios from 'axios';

const baseUrl = 'http://localhost:3000/persons';

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(resp => resp.data);
}

const createPerson = (newPerson) => {
    const request = axios.post(baseUrl, newPerson);
    return request.then(resp => resp.data);
}

export default { getAll, createPerson };