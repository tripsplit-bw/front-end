import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'https://bw-trip-split.herokuapp.com/api/',
        headers: {
            Authorization: `${token}`
        }
    });
};