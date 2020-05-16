import axios from 'axios';
import { Variable } from 'components'

const DETAILPEMINJAMAN_API_URL = `${Variable}/peminjaman/detail/`;
const INSERTSURAT_API_URL = `${Variable}/surat/add`;

class ComponentService {
	detailPeminjaman(peminjamanId) {
		return axios.get(`${DETAILPEMINJAMAN_API_URL}` + peminjamanId)
	}
	insertSurat(surat) {
		return axios.post(`${INSERTSURAT_API_URL}`, surat)
	}
}

export default new ComponentService()