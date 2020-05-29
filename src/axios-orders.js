import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-6b6ae.firebaseio.com/'
});

export default instance;