import axios from 'axios';

const instance = axios.create({
  baseURL: 'nodeshoprestapibackend-production.up.railway.app',
});

export default instance;
