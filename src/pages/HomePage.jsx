import FormularioHubspot from '../components/HubspotFormulario'
import { useState } from 'react'
import vaca from '../../public/vaca1.png'

const HomePage = () => {
	const [formularioVisible, setFormularioVisible] = useState(false)
	const [showAdditionalText, setShowAdditionalText] = useState(false)

	const toggleFormulario = () => {
		setFormularioVisible(!formularioVisible)
	}

	return (
		<div className='bg-bg flex flex-col justify-between'>
			<img src={vaca} alt='' className='h-2/5 w-2/5 self-center' />
			<div className='flex justify-between'>
				<div
					className=' text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl'
					onMouseEnter={() => setShowAdditionalText(true)}
					onMouseLeave={() => setShowAdditionalText(false)}>
					<p>QUÉ ES LA</p>
					<p className='text-violet-500'>ECONOMÍA?</p>
				</div>

				<div className='text-sm text-black'>
					{showAdditionalText && (
						<p className='animate-fadeDown'>
							Ciencia que estudia satisfacer necesidades ilimitadas con recursos
							limitados
						</p>
					)}
				</div>
				<div>
					<button
						onClick={toggleFormulario}
						className='rounded-full bg-fuchsia-400 px-4'>
						Contacta con nosotros
					</button>

					{formularioVisible && <FormularioHubspot />}
				</div>
			</div>
		</div>
	)
}

export default HomePage
