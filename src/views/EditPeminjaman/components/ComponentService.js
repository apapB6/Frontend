import axios from 'axios';
import { Variable } from 'components'

const EDITPEMINJAMAN_API_URL = `${Variable}/peminjaman/edit/`;

class ComponentService {
	editPeminjaman(peminjamanId) {
		return axios.get(`${EDITPEMINJAMAN_API_URL}` + peminjamanId)
	}
	editPeminjamanPost(peminjamanId){
		return axios.post(`${EDITPEMINJAMAN_API_URL}` + peminjamanId)
	}
}

export default new ComponentService()