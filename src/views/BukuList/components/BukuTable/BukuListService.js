import axios from "axios";
import { Variable } from 'components'

const VIEWALL_BUKU_URL = `${Variable}/buku/viewall`

class BukuListService {
	getAllBuku() {
		return axios.get(`${VIEWALL_BUKU_URL}`)
	}
}

export default new BukuListService()