import { Variable } from 'components'

const AUTH_API_URL = `${Variable}/authenticate`

class ComponentService {
	getAuth() {
		return `${AUTH_API_URL}`
	}
}

export default new ComponentService()