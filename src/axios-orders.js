import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://nodeshoprestapibackend-production.up.railway.app',
});

export default instance;
