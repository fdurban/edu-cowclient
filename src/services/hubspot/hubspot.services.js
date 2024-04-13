import axios from 'axios'
import crypto from 'crypto-browserify'

class HubspotHandler {
	constructor() {
		this.baseURL = `https://api.hubapi.com/crm/v3/objects/contacts`
		this.token = import.meta.env.VITE_HUBSTOKEN
	}

	async postData(data, requestTimestamp, signature) {
		const url = this.baseURL

		const currentTimestamp = Math.floor(Date.now() / 1000)
		if (currentTimestamp - requestTimestamp > 300) {
			throw new Error('El timestamp de la solicitud es antiguo')
		}

		const requestBody = JSON.stringify(data)
		const stringToSign = `POST${url}${requestBody}${requestTimestamp}`

		const hmac = crypto.createHmac('sha256', this.token)
		const calculatedSignature = hmac.update(stringToSign).digest('base64')

		if (signature !== calculatedSignature) {
			throw new Error('Firma de solicitud inválida')
		}

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
						'X-HubSpot-Request-Timestamp': requestTimestamp,
						'X-HubSpot-Signature-v3': signature,
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
