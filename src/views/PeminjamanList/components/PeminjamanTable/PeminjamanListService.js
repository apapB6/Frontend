import axios from "axios";
import { Variable } from 'components'

const VIEWALL_PEMINJAMAN_URL = `${Variable}/peminjaman/viewall`

class PeminjamanListService {
	getAllPeminjaman() {
		return axios.get(`${VIEWALL_PEMINJAMAN_URL}`)
	}
}

export default new PeminjamanListService()