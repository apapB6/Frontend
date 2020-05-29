import axios from 'axios';
import { Variable } from 'components'

const DETAILPENGGUNA_API_URL = `${Variable}/pengguna/detail/`;

class ComponentService {
	detailPengguna(penggunaId) {
		return axios.get(`${DETAILPENGGUNA_API_URL}` + penggunaId, {
			headers: {
				'Authorization': 'Bearer ' + JSON.parse(Cookies.get('user')).token
			}
		})
	}
}

export default new ComponentService()