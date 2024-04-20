import axios from 'axios'

class HubspotHandler {
	constructor() {
		this.baseURL = `https://api.hubapi.com/crm/v3/objects/contacts`
		this.token = import.meta.env.VITE_HUBSTOKEN
	}

	async postData(data) {
		const url = this.baseURL
		try {
			const response = await axios.post(
				url,
				{
					properties: data,
				},
				{
					headers: {
						Authorization: `Bearer ${this.token}`,
						'Content-Type': 'application/json',
					},
				},
			)

			console.log(response.data)
			return response.data
		} catch (error) {
			console.error('Error posting data:', error)
			throw error
		}
	}
}

const accountHandler = new HubspotHandler()
export default accountHandler
