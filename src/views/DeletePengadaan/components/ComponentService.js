import axios from 'axios';
import { Variable } from 'components'

const DELETEPENGADAAN_API_URL = `${Variable}/pengadaan/delete/`;

class ComponentService {
	deletePengadaan(pengadaanId) {
		return axios.get(`${DELETEPENGADAAN_API_URL}` + pengadaanId)
	}
	deletePengadaanPost(pengadaanId, pengadaan){
		return axios.post(`${DELETEPENGADAAN_API_URL}` + pengadaanId, pengadaan)
	}
}

export default new ComponentService()