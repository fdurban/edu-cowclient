import { useState } from 'react'

const Slide1 = () => {
	const [showAdditionalText, setShowAdditionalText] = useState(false)

	return (
		<div className='ml-4 mt-96'>
			<div
				className='w-fit text-6xl xl:text-7xl'
				onMouseEnter={() => setShowAdditionalText(true)}
				onMouseLeave={() => setShowAdditionalText(false)}>
				<p className='font-lalezar dark:text-white'>
					QUÉ ES LA
					<br />
					<span className='font-lalezar text-violet-500'>ECONOMÍA?</span>
				</p>
			</div>

			<div className='flex flex-col text-sm text-black'>
				{showAdditionalText && (
					<p className='font-lalezar animate-fadeDown dark:text-white'>
						Ciencia que estudia satisfacer necesidades ilimitadas con recursos
						limitados
					</p>
				)}
			</div>
		</div>
	)
}

export default Slide1
