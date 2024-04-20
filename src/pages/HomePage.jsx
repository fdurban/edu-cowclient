import background from '../assets/backgroundnubes.webp'
import FormularioHubspot from '../components/HubspotFormulario'
import { useState } from 'react'

const HomePage = () => {
	const [formularioVisible, setFormularioVisible] = useState(false)

	const toggleFormulario = () => {
		setFormularioVisible(!formularioVisible)
	}
	const cerrarFormulario = () => {
		setFormularioVisible(false)
	}

	const [showAdditionalText, setShowAdditionalText] = useState(false)

	return (
		<div
			className='h-screen flex flex-col justify-center items-center'
			style={{
				backgroundImage: `url(${background})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}>
			<div
				className={`fixed inset-0 bg-black bg-opacity-50 z-10 ${formularioVisible ? 'block' : 'hidden'}`}
				onClick={cerrarFormulario}></div>
			<div
				className={`transform transition-transform z-20 ${formularioVisible ? 'translate-y-0' : 'translate-y-full'}`}>
				{formularioVisible && (
					<div className='relative'>
						<button
							onClick={toggleFormulario}
							className='absolute top-0 right-0 mt-2 mr-2 text-white hover:text-gray-400'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						</button>
						<FormularioHubspot />
					</div>
				)}
			</div>
			<button
				onClick={toggleFormulario}
				className='bg-fuchsia-400 rounded-full rounded-md px-4 absolute bottom-4 right-4'>
				<div className='flex justify-center items-center py-4'>
					<div className='w-5 h-12 bg-black rounded-full mx-1'></div>
					<div className='w-5 h-12 bg-black rounded-full mx-1'></div>
				</div>
			</button>
			<h1
				className={
					showAdditionalText
						? 'animate-moveUp text-white text-4xl font-bold absolute bottom-5 left-20'
						: 'text-white text-4xl font-bold absolute bottom-5 left-20'
				}
				onMouseEnter={() => setShowAdditionalText(true)}
				onMouseLeave={() => setShowAdditionalText(false)}>
				QUÉ ES LA ECONOMÍA?
			</h1>

			<h5
				className={
					showAdditionalText
						? 'animate-fadeDown text-white absolute bottom-5 left-20 opacity-100'
						: 'opacity-0  text-white absolute bottom-5 left-20'
				}>
				Ciencia que estudia satisfacer necesidades ilimitadas con recursos
				limitados
			</h5>
		</div>
	)
}

export default HomePage
