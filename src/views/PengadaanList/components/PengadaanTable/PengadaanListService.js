import axios from "axios";
import { Variable } from 'components'
import Cookies from 'js-cookie'

const VIEWALL_PENGADAAN_URL = `${Variable}/pengadaan/viewall`

class PengadaanListService {
	getAllPengadaan() {
		return axios.get(`${VIEWALL_PENGADAAN_URL}`)
	}
}

export default new PengadaanListService()