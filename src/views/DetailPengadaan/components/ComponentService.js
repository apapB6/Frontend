import axios from 'axios';

const API_URL = 'http://localhost:8080'
const DETAILPENGADAAN_API_URL = `${API_URL}/pengadaan/detail`;

class ComponentService {
	detailPengadaan(pengadaan) {
		return axios.post(`${DETAILPENGADAAN_API_URL}`, pengadaan)
	}
}

export default new ComponentService()