import axios from 'axios';

const API_URL = 'http://localhost:8080'
const DETAILBUKU_API_URL = `${API_URL}/buku/detail`;

class ComponentService {
	detailBuku(buku) {
		return axios.post(`${DETAILBUKU_API_URL}`, buku)
	}
}

export default new ComponentService()