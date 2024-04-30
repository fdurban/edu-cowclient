import FormularioHubspot from '../components/HubspotFormulario'
import { useState } from 'react'

const HomePage = () => {
	const [formularioVisible, setFormularioVisible] = useState(false)
	const [showAdditionalText, setShowAdditionalText] = useState(false)

	const toggleFormulario = () => {
		setFormularioVisible(!formularioVisible)
	}

	return (
		<div
			className='flex h-screen flex-col'
			style={{
				backgroundColor: '#87d3f5',
			}}>
			<div
				className={` ${formularioVisible ? 'block' : 'hidden'}`}
				onClick={() => setFormularioVisible(false)}></div>

			<button onClick={toggleFormulario}>
				<h1 className='absolute bottom-4 right-4 rounded-full bg-fuchsia-400 px-4'>
					Contacta con nosotros
				</h1>
			</button>

			{formularioVisible && (
				<>
					<FormularioHubspot />
				</>
			)}

			<h1
				className={
					showAdditionalText
						? 'absolute bottom-20 left-44 animate-moveUp text-3xl sm:bottom-36 sm:text-4xl md:bottom-16 md:text-5xl lg:text-7xl xl:text-7xl'
						: 'absolute bottom-20 left-44 text-3xl sm:bottom-36 sm:text-4xl md:bottom-16 md:text-5xl lg:text-7xl xl:text-7xl'
				}
				onMouseEnter={() => setShowAdditionalText(true)}
				onMouseLeave={() => setShowAdditionalText(false)}>
				QUÉ ES LA
				<br />
				<span className={'text-violet-500'}>ECONOMÍA?</span>
			</h1>

			<h5
				className={
					showAdditionalText
						? 'absolute bottom-14 left-44 animate-fadeDown overflow-hidden whitespace-normal text-sm text-black opacity-100 sm:text-3xl md:bottom-10 md:animate-typing md:whitespace-nowrap lg:whitespace-nowrap'
						: ' opacity-0'
				}>
				Ciencia que estudia satisfacer necesidades ilimitadas con recursos
				limitados
			</h5>
		</div>
	)
}

export default HomePage
