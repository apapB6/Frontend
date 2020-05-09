import axios from 'axios';

const API_URL = 'http://localhost:8080'
const INSERTPENGADAAN_API_URL = `${API_URL}/pengadaan/add`;

class ComponentService {
	insertPengadaan(pengadaan) {
		return axios.post(`${INSERTPENGADAAN_API_URL}`, pengadaan)
	}
}

export default new ComponentService()