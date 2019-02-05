import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://coven-d48fc.firebaseio.com/'
})

export default instance; 