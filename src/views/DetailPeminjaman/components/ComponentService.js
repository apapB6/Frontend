import axios from 'axios';
import { Variable } from 'components'
import Cookies from 'js-cookie'

const DETAILPEMINJAMAN_API_URL = `${Variable}/peminjaman/detail/`;
const INSERTSURAT_API_URL = `${Variable}/surat/add`;

class ComponentService {
	detailPeminjaman(peminjamanId) {
		return axios.get(`${DETAILPEMINJAMAN_API_URL}` + peminjamanId, {
			headers: {
				'Authorization': 'Bearer ' + JSON.parse(Cookies.get('user')).token
			}
		})
	}
	insertSurat(surat) {
		return axios.post(`${INSERTSURAT_API_URL}`, surat, {
			headers: {
				'Authorization': 'Bearer ' + JSON.parse(Cookies.get('user')).token
			}
		})
	}
}

export default new ComponentService()