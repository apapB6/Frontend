import axios from "axios";

const API_URL = 'http://localhost:8080'
const VIEWALL_BUKU_URL = `${API_URL}/buku/viewall`

class BukuListService {
	getAllBuku() {
		return axios.get(`${VIEWALL_BUKU_URL}`)
	}
}

export default new BukuListService()