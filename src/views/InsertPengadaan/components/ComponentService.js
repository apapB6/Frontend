import axios from 'axios';
import { Variable } from 'components'

const INSERTPENGADAAN_API_URL = `${Variable}/pengadaan/add`;

class ComponentService {
	insertPengadaan(pengadaan) {
		return axios.post(`${INSERTPENGADAAN_API_URL}`, pengadaan)
	}
}

export default new ComponentService()