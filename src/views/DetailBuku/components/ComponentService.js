import axios from 'axios';
import { Variable } from 'components'

const DETAILBUKU_API_URL = `${Variable}/buku/detail/`;

class ComponentService {
	detailBuku(bukuId) {
		return axios.get(`${DETAILBUKU_API_URL}` + bukuId)
	}
}

export default new ComponentService()