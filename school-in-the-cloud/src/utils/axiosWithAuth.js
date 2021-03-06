import axios from 'axios';

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'https://school-in-the-cloud2.herokuapp.com',
        headers: {
            Authorization: JSON.parse(localStorage.getItem('token'))
        },
    });
};
