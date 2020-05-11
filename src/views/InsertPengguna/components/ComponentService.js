import axios from 'axios';
import { Variable } from 'components'

const INSERTPENGGUNA_API_URL = `${Variable}/pengguna/add`;

class ComponentService {
	insertPengguna(pengguna) {
		return axios.post(`${INSERTPENGGUNA_API_URL}`, pengguna)
	}
}

export default new ComponentService()