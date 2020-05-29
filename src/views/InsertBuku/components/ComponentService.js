import axios from 'axios';
import { Variable } from 'components'
import Cookies from 'js-cookie'

const INSERTBUKU_API_URL = `${Variable}/buku/add`;

class ComponentService {
	insertBuku(buku) {
		return axios.post(`${INSERTBUKU_API_URL}`, buku, {
			headers: {
				'Authorization': 'Bearer ' + JSON.parse(Cookies.get('user')).token
			}
		})
	}
}

export default new ComponentService()