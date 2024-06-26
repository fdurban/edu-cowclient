import { useState } from 'react'
import axios from 'axios'

const FormularioHubspot = () => {
	const [email, setEmail] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setlastName] = useState('')
	const [enviado, setEnviado] = useState(false)
	const [error, setError] = useState(null)

	const handleSubmit = async e => {
		e.preventDefault()

		try {
			const response = await axios.post(
				'http://localhost:3000/create-contact',
				{ email },
			)
			if (response && response.data) {
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
		<div className='flex w-fit animate-slideInRight flex-col items-center rounded-md border-solid bg-white p-4'>
			<h2>Rellena tus datos</h2>
			{error && <p>{error}</p>}
			{enviado ? (
				<p>¡Gracias por enviar tus datos!</p>
			) : (
				<form onSubmit={handleSubmit} className='flex flex-col'>
					<label>
						<input
							className='rounded-md text-center'
							type='email'
							value={email}
							onChange={e => setEmail(e.target.value)}
							required
							placeholder='Correo'
						/>
					</label>
					<label>
						<input
							className='rounded-md text-center'
							type='name'
							value={firstName}
							onChange={e => setFirstName(e.target.value)}
							required
							placeholder='Nombre'
						/>
					</label>
					<button
						type='submit'
						className='mt-4 rounded bg-cyan-700 py-2 text-white hover:bg-cyan-600'>
						Enviar
					</button>
				</form>
			)}
		</div>
	)
}

export default FormularioHubspot
