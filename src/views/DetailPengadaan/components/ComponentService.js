import axios from 'axios';
import { Variable } from 'components'
import Cookies from 'js-cookie'

const DETAILPENGADAAN_API_URL = `${Variable}/pengadaan/detail/`;

class ComponentService {
	detailPengadaan(pengadaanId) {
		return axios.get(`${DETAILPENGADAAN_API_URL}` + pengadaanId, {
			headers: {
				'Authorization': 'Bearer ' + JSON.parse(Cookies.get('user')).token
			}
		})
	}
}

export default new ComponentService()