import { useState } from 'react'

const Slide1 = () => {
	const [showAdditionalText, setShowAdditionalText] = useState(false)

	return (
		<>
			<div className='flex flex-grow flex-col justify-end'>
				<div
					className='  text-6xl xl:text-7xl'
					onMouseEnter={() => setShowAdditionalText(true)}
					onMouseLeave={() => setShowAdditionalText(false)}>
					<p className='font-lalezar '>
						QUÉ ES LA
						<br />
						<span className='font-lalezar text-violet-500 '>ECONOMÍA?</span>
					</p>
				</div>
			</div>
			<div className='text-sm text-black'>
				{showAdditionalText && (
					<p className='font-lalezar animate-fadeDown'>
						Ciencia que estudia satisfacer necesidades ilimitadas con recursos
						limitados
					</p>
				)}
			</div>
		</>
	)
}

export default Slide1
