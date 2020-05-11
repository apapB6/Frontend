import axios from 'axios';
import { Variable } from 'components'

const TOTALBUKU_API_URL = `${Variable}/buku/viewall`
const TOTALPENGADAAN_API_URL = `${Variable}/pengadaan/viewall`
const TOTALUSER_API_URL = `${Variable}/pengguna/viewall`
const PEMINJAMANLIST_API_URL = `${Variable}/peminjaman/viewall`
const BERANDA_API_URL = `${Variable}/beranda/`

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
	getBeranda() {
		return axios.get(`${BERANDA_API_URL}`)
	}
}

export default new ComponentService()