import axios from 'axios';
import { Variable } from 'components'
import Cookies from 'js-cookie'

const INSERTPENGADAAN_API_URL = `${Variable}/api/add-pengadaan`;

class ComponentService {
	insertPengadaan(pengadaan) {
		return axios.post(`${INSERTPENGADAAN_API_URL}`, pengadaan, {
			headers: {
				'Authorization': 'Bearer ' + JSON.parse(Cookies.get('user')).token
			}
		})
	}
}

export default new ComponentService()