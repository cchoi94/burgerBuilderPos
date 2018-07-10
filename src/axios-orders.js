import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-pos-project.firebaseio.com/'
});

export default instance