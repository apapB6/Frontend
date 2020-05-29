import axios from "axios";
import { Variable } from 'components'
import Cookies from 'js-cookie'

const VIEWALL_PEMINJAMAN_URL = `${Variable}/peminjaman/viewall`

class PeminjamanListService {
	getAllPeminjaman() {
		return axios.get(`${VIEWALL_PEMINJAMAN_URL}`, {
			headers: {
				'Authorization': 'Bearer ' + JSON.parse(Cookies.get('user')).token
			}
		})
	}
}

export default new PeminjamanListService()