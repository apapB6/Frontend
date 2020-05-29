import axios from 'axios';
import { Variable } from 'components'
import Cookies from 'js-cookie'

const EDITPEMINJAMAN_API_URL = `${Variable}/peminjaman/edit/`;

class ComponentService {
	editPeminjaman(peminjamanId) {
		return axios.get(`${EDITPEMINJAMAN_API_URL}` + peminjamanId, {
			headers: {
				'Authorization': 'Bearer ' + JSON.parse(Cookies.get('user')).token
			}
		})
	}
	editPeminjamanPost(peminjamanId, peminjaman){
		return axios.post(`${EDITPEMINJAMAN_API_URL}` + peminjamanId, peminjaman, {
			headers: {
				'Authorization': 'Bearer ' + JSON.parse(Cookies.get('user')).token
			}
		})
	}
}

export default new ComponentService()