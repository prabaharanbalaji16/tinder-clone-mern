import axios from 'axios';

const instance = axios.create({
    baseURL:"https://mern-stack-tinder.herokuapp.com/"
})

export default instance