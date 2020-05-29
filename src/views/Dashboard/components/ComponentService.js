import axios from 'axios'
import { Variable } from 'components'
import Cookies from 'js-cookie'
const TOTALBUKU_API_URL = `${Variable}/buku/viewall`
const TOTALPENGADAAN_API_URL = `${Variable}/pengadaan/viewall`
const TOTALUSER_API_URL = `${Variable}/pengguna/viewall`
const PEMINJAMANLIST_API_URL = `${Variable}/peminjaman/viewall`
const BERANDA_API_URL = `${Variable}/beranda`

class ComponentService {
	getAllBuku() {
		return axios.get(`${TOTALBUKU_API_URL}`, {
			headers: {
				'Authorization': 'Bearer ' + JSON.parse(Cookies.get('user')).token
			}
		})
	}
	getAllPengadaan() {
		return axios.get(`${TOTALPENGADAAN_API_URL}`, {
			headers: {
				'Authorization': 'Bearer ' + JSON.parse(Cookies.get('user')).token
			}
		})
	}
	getAllUser() {
		return axios.get(`${TOTALUSER_API_URL}`, {
			headers: {
				'Authorization': 'Bearer ' + JSON.parse(Cookies.get('user')).token
			}
		})
	}
	getAllPeminjaman() {
		return axios.get(`${PEMINJAMANLIST_API_URL}`, {
			headers: {
				'Authorization': 'Bearer ' + JSON.parse(Cookies.get('user')).token
			}
		})
	}
	getBeranda() {
		return axios.get(`${BERANDA_API_URL}`, {
			headers: {
				'Authorization': 'Bearer ' + JSON.parse(Cookies.get('user')).token
			}
		})
	}
}

export default new ComponentService()