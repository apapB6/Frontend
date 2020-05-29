import axios from "axios";
import { Variable } from 'components'

const VIEWALL_USER_URL = `${Variable}/pengguna/viewall`

class UserListService {
	getAllUser() {
		return axios.get(`${VIEWALL_USER_URL}`, {
			headers: {
				'Authorization': 'Bearer ' + JSON.parse(Cookies.get('user')).token
			}
		})
	}
}

export default new UserListService()