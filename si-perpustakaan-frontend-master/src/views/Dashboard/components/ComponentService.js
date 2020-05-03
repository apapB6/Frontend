import axios from 'axios';

const API_URL = 'http://localhost:8080'
const TOTALBUKU_API_URL = `${API_URL}/buku/viewall`
const TOTALPENGADAAN_API_URL = `${API_URL}/pengadaan/viewall`
const TOTALUSER_API_URL = `${API_URL}/pengguna/viewall`
const PEMINJAMANLIST_API_URL = `${API_URL}/peminjaman/viewall`

class ComponentService {
	getAllBuku() {
		return axios.get(`${TOTALBUKU_API_URL}`)
	}
	getAllPengadaan() {
		return axios.get(`${TOTALPENGADAAN_API_URL}`)
	}
	getAllUser() {
		return axios.get(`${TOTALUSER_API_URL}`)
	}
	getAllPeminjaman() {
		return axios.get(`${PEMINJAMANLIST_API_URL}`)
	}
}

export default new ComponentService()