import axios from "axios";

const API_URL = 'http://localhost:8080'
const VIEWALL_USER_URL = `${API_URL}/pengguna/viewall`

class UserListService {
	getAllUser() {
		return axios.get(`${VIEWALL_USER_URL}`)
	}
}

export default new UserListService()