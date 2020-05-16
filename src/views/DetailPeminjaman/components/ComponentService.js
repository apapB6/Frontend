import axios from 'axios';
import { Variable } from 'components'

const INSERTSURAT_API_URL = `${Variable}/surat/add`;

class ComponentService {
	insertSurat(surat) {
		return axios.post(`${INSERTSURAT_API_URL}`, surat)
	}
}

export default new ComponentService()