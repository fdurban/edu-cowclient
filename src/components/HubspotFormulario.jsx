import { useState } from 'react'
import accountHandler from '../services/hubspot/hubspot.services'

const FormularioHubspot = () => {
	const [email, setEmail] = useState('')
	const [enviado, setEnviado] = useState(false)
	const [error, setError] = useState(null)

	const handleSubmit = async e => {
		e.preventDefault()

		try {
			const response = await accountHandler.postData({ email })

			if (response && response.status === 'success') {
				setEnviado(true)
				setEmail('')
			} else {
				setError(
					'Hubo un error al enviar el formulario. Inténtalo de nuevo más tarde.',
				)
			}
		} catch (error) {
			console.error('Error al enviar formulario:', error)
			setError(
				'Hubo un error al enviar el formulario. Inténtalo de nuevo más tarde.',
			)
		}
	}

	return (
		<div className='mt-2'>
			<h2>Rellena tus datos</h2>
			{error && <p>{error}</p>}
			{enviado ? (
				<p>¡Gracias por enviar tus datos!</p>
			) : (
				<form onSubmit={handleSubmit} className='flex flex-col'>
					<label>
						<input
							className='text-center rounded-md'
							type='email'
							value={email}
							onChange={e => setEmail(e.target.value)}
							required
							placeholder='Correo'
						/>
					</label>
					<button
						type='submit'
						className='bg-cyan-700 py-2 rounded text-white hover:bg-cyan-600 mt-4'>
						Enviar
					</button>
				</form>
			)}
		</div>
	)
}

export default FormularioHubspot
