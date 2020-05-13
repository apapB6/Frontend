import axios from 'axios';
import { Variable } from 'components'

const DETAILPEMINJAMAN_API_URL = `${Variable}/peminjaman/detail/`;

class ComponentService {
	detailPeminjaman(peminjamanId) {
		return axios.get(`${DETAILPEMINJAMAN_API_URL}` + peminjamanId)
	}
}

export default new ComponentService()