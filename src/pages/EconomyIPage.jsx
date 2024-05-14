import FormularioHubspot from '../components/HubspotFormulario'
import { useState } from 'react'

const EconomyIPage = () => {
	const [formularioVisible, setFormularioVisible] = useState(false)
	const [showAdditionalText, setShowAdditionalText] = useState(false)

	const toggleFormulario = () => {
		setFormularioVisible(!formularioVisible)
	}

	return (
		<div
			id='controls-carousel'
			className='relative h-full w-full'
			data-carousel='static'>
			{/* <!-- Carousel wrapper --> */}
			<div className='relative h-56 overflow-hidden rounded-lg md:h-96'>
				{/* <!-- Item 1 --> */}
				<div className=' flex h-full w-full items-end justify-between'>
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
									Ciencia que estudia satisfacer necesidades ilimitadas con
									recursos limitados
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
				</div>
				{/* <!-- Item 2 --> */}
				<div
					className='hidden duration-700 ease-in-out'
					data-carousel-item='active'>
					<img
						src='/docs/images/carousel/carousel-2.svg'
						className='absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2'
						alt='...'
					/>
				</div>
				{/* <!-- Item 3 --> */}
				<div className='hidden duration-700 ease-in-out' data-carousel-item>
					<img
						src='/docs/images/carousel/carousel-3.svg'
						className='absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2'
						alt='...'
					/>
				</div>
				{/* <!-- Item 4 --> */}
				<div className='hidden duration-700 ease-in-out' data-carousel-item>
					<img
						src='/docs/images/carousel/carousel-4.svg'
						className='absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2'
						alt='...'
					/>
				</div>
				{/* <!-- Item 5 --> */}
				<div className='hidden duration-700 ease-in-out' data-carousel-item>
					<img
						src='/docs/images/carousel/carousel-5.svg'
						className='absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2'
						alt='...'
					/>
				</div>
			</div>
			{/* <!-- Slider controls --> */}
			<button
				type='button'
				className='group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none'
				data-carousel-prev>
				<span className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70'>
					<svg
						className='h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 6 10'>
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M5 1 1 5l4 4'
						/>
					</svg>
					<span className='sr-only'>Previous</span>
				</span>
			</button>
			<button
				type='button'
				className='group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none'
				data-carousel-next>
				<span className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70'>
					<svg
						className='h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 6 10'>
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='m1 9 4-4-4-4'
						/>
					</svg>
					<span className='sr-only'>Next</span>
				</span>
			</button>
		</div>
	)
}

export default EconomyIPage
