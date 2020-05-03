import axios from "axios";

const API_URL = 'http://localhost:8080'
const VIEWALL_PENGADAAN_URL = `${API_URL}/pengadaan/viewall`

class PengadaanListService {
	getAllPengadaan() {
		return axios.get(`${VIEWALL_PENGADAAN_URL}`)
	}
}

export default new PengadaanListService()