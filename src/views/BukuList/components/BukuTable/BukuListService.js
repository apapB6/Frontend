import axios from "axios";
import { Variable } from 'components'
import Cookies from 'js-cookie'

const VIEWALL_BUKU_URL = `${Variable}/buku/viewall`

class BukuListService {
	getAllBuku() {
		return axios.get(`${VIEWALL_BUKU_URL}`, {
			headers: {
				'Authorization': 'Bearer ' + JSON.parse(Cookies.get('user')).token
			}
		})
	}
}

export default new BukuListService()