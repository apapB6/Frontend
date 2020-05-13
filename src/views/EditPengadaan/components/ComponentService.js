import axios from 'axios';
import { Variable } from 'components'

const DETAILPENGADAAN_API_URL = `${Variable}/pengadaan/detail/`;

class ComponentService {
	detailPengadaan(pengadaanId) {
		return axios.get(`${DETAILPENGADAAN_API_URL}` + pengadaanId)
	}
}

export default new ComponentService()