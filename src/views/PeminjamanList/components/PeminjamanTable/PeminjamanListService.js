import axios from "axios";

const API_URL = 'http://localhost:8080'
const VIEWALL_PEMINJAMAN_URL = `${API_URL}/peminjaman/viewall`

class PeminjamanListService {
	getAllPeminjaman() {
		return axios.get(`${VIEWALL_PEMINJAMAN_URL}`)
	}
}

export default new PeminjamanListService()