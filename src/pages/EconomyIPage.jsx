import FormularioHubspot from '../components/HubspotFormulario'
import { useState } from 'react'

const EconomyIPage = () => {
	const [formularioVisible, setFormularioVisible] = useState(false)
	const [showAdditionalText, setShowAdditionalText] = useState(false)

	const toggleFormulario = () => {
		setFormularioVisible(!formularioVisible)
	}
	const contentArray = [
		<div key={1} className='flex h-full w-full items-end justify-between'>
			<div className='flex flex-col'>
				<div
					className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl'
					onMouseEnter={() => setShowAdditionalText(true)}
					onMouseLeave={() => setShowAdditionalText(false)}>
					<p>
						QUÉ ES LA
						<br />
						<span className='text-violet-500'>ECONOMÍA?</span>
					</p>
				</div>

				<div className='text-sm text-black'>
					{showAdditionalText && (
						<p className='animate-fadeDown'>
							Ciencia que estudia satisfacer necesidades ilimitadas con recursos
							limitados
						</p>
					)}
				</div>
			</div>
			<div>
				<button
					onClick={toggleFormulario}
					className='rounded-full bg-fuchsia-400 px-4'>
					Contacta con nosotros
				</button>

				{formularioVisible && <FormularioHubspot />}
			</div>
		</div>,
		<div key={2}>
			<h1>Contenido 2</h1>
			<p>Este es el contenido 2</p>
		</div>,
		<div key={3}>
			<h1>Contenido 3</h1>
			<p>Este es el contenido 3</p>
		</div>,
	]

	const [currentIndex, setCurrentIndex] = useState(0)

	const nextSlide = () => {
		setCurrentIndex(prevIndex =>
			prevIndex === contentArray.length - 1 ? 0 : prevIndex + 1,
		)
	}

	const prevSlide = () => {
		setCurrentIndex(prevIndex =>
			prevIndex === 0 ? contentArray.length - 1 : prevIndex - 1,
		)
	}

	return (
		<div className='relative h-full'>
			<button
				className='absolute left-0 top-1/2 z-10 -translate-y-1/2 transform'
				onClick={prevSlide}>
				Previous
			</button>
			<button
				className='absolute right-0 top-1/2 z-10 -translate-y-1/2 transform'
				onClick={nextSlide}>
				Next
			</button>
			<div className='w-full overflow-hidden'>{contentArray[currentIndex]}</div>
		</div>
	)
}

export default EconomyIPage
