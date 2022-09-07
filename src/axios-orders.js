import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://nodeshop-br.herokuapp.com/',
});

export default instance;
