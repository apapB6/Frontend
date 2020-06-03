import axios from 'axios';
import { Variable } from 'components'
import Cookies from 'js-cookie'

const INSERTPENGGUNA_API_URL = `${Variable}/api/add-user`;

class ComponentService {
	insertPengguna(pengguna) {
		return axios.post(`${INSERTPENGGUNA_API_URL}`, pengguna, {
			headers: {
				'Authorization': 'Bearer ' + JSON.parse(Cookies.get('user')).token
			}
		})
	}
}

export default new ComponentService()