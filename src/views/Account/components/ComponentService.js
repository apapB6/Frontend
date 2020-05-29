import axios from 'axios'
import { Variable } from 'components'
import Cookies from 'js-cookie'
const PROFILE_API_URL = `${Variable}/pengguna/profile/`

class ComponentService {
	getProfile() {
		return axios.get(`${PROFILE_API_URL}` + JSON.parse(Cookies.get('user')).uuid, {
			headers: {
				'Authorization': 'Bearer ' + JSON.parse(Cookies.get('user')).token
			}
		})
	}
}

export default new ComponentService()