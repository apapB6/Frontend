import axios from 'axios';

const API_URL = 'http://localhost:8080'
const INSERTPENGGUNA_API_URL = `${API_URL}/pengguna/add`;

class ComponentService {
	insertPengguna(pengguna) {
		return axios.post(`${INSERTPENGGUNA_API_URL}`, pengguna)
	}
}

export default new ComponentService()