import axios from 'axios';
import { Variable } from 'components'

const DELETEBUKU_API_URL = `${Variable}/buku/delete/`;

class ComponentService {
	deleteBuku(bukuId) {
		return axios.get(`${DELETEBUKU_API_URL}` + bukuId)
	}
	deleteBukuPost(bukuId){
		return axios.post(`${DELETEBUKU_API_URL}` + bukuId)
	}
}

export default new ComponentService()