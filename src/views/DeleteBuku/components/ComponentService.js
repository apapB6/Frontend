import axios from 'axios';
import { Variable } from 'components'
import Cookies from 'js-cookie'

const DELETEBUKU_API_URL = `${Variable}/buku/delete/`;

class ComponentService {
	deleteBuku(bukuId) {
		return axios.get(`${DELETEBUKU_API_URL}` + bukuId, {
			headers: {
				'Authorization': 'Bearer ' + JSON.parse(Cookies.get('user')).token
			}
		})
	}
	deleteBukuPost(bukuId) {
		return axios.post(`${DELETEBUKU_API_URL}` + bukuId, null, {
			headers: {
				'Authorization': 'Bearer ' + JSON.parse(Cookies.get('user')).token
			}
		})
	}
}

export default new ComponentService()