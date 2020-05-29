import axios from 'axios';
import { Variable } from 'components'
import Cookies from 'js-cookie'

const DELETEPENGADAAN_API_URL = `${Variable}/pengadaan/delete/`;

class ComponentService {
	deletePengadaan(pengadaanId) {
		return axios.get(`${DELETEPENGADAAN_API_URL}` + pengadaanId, {
			headers: {
				'Authorization': 'Bearer ' + JSON.parse(Cookies.get('user')).token
			}
		})
	}
	deletePengadaanPost(pengadaanId, pengadaan){
		return axios.post(`${DELETEPENGADAAN_API_URL}` + pengadaanId, pengadaan, {
			headers: {
				'Authorization': 'Bearer ' + JSON.parse(Cookies.get('user')).token
			}
		})
	}
}

export default new ComponentService()