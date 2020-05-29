import axios from 'axios';
import { Variable } from 'components'
import Cookies from 'js-cookie'

const DETAILBUKU_API_URL = `${Variable}/buku/detail/`;
const ADDPEMINJAMAN_API_URL = `${Variable}/buku/peminjaman/`;

class ComponentService {
	detailBuku(bukuId) {
		return axios.get(`${DETAILBUKU_API_URL}` + bukuId, {
			headers: {
				'Authorization': 'Bearer ' + JSON.parse(Cookies.get('user')).token
			}
		})
	}
	addPeminjaman(bukuId) {
		return axios.post(`${ADDPEMINJAMAN_API_URL}` + bukuId, null, {
			headers: {
				'Authorization': 'Bearer ' + JSON.parse(Cookies.get('user')).token
			}
		})
	}
}

export default new ComponentService()