import axios from 'axios';
import { Variable } from 'components'

const INSERTBUKU_API_URL = `${Variable}/buku/add`;

class ComponentService {
	insertBuku(buku) {
		return axios.post(`${INSERTBUKU_API_URL}`, buku)
	}
}

export default new ComponentService()