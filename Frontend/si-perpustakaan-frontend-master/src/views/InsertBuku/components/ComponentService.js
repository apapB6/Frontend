import axios from 'axios';

const API_URL = 'http://localhost:8080';
const INSERTBUKU_API_URL = `${API_URL}/buku/add`;

class ComponentService {
	insertBuku(buku) {
		return axios.post(`${INSERTBUKU_API_URL}`, buku)
	}
}

export default new ComponentService()