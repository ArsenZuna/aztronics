import axios from 'axios';

const API = axios.create({
	baseURL: 'https://az-tronics-default-rtdb.europe-west1.firebasedatabase.app',
	headers: { 'Content-Type': 'application/json' }
});

export default API;