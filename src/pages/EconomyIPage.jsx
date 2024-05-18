import { useState, useEffect } from 'react'
import Slide1 from '../components/economyI/Slide1'
import Slide2 from '../components/economyI/Slide2'
const EconomyIPage = () => {
	const [direction, setDirection] = useState('')
	const [overflow, setOverflow] = useState('')

	const contentArray = [<Slide1 key={1} />, <Slide2 key={2} />]

	const [currentIndex, setCurrentIndex] = useState(0)

	const nextSlide = () => {
		setDirection('animate-slideRight')
		setOverflow('overflow-hidden')
		setCurrentIndex(prevIndex =>
			prevIndex === contentArray.length - 1 ? 0 : prevIndex + 1,
		)
	}

	const prevSlide = () => {
		setDirection('animate-slideLeft')
		setOverflow('overflow-hidden')
		setCurrentIndex(prevIndex =>
			prevIndex === 0 ? contentArray.length - 1 : prevIndex - 1,
		)
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			setDirection('')
			setOverflow('')
		}, 500)
		return () => clearTimeout(timer)
	}, [direction, overflow])

	return (
		<div className={`h-full ${overflow}`}>
			<div className={`${direction}`}>{contentArray[currentIndex]}</div>

			<button className='fixed left-8 top-80 z-0' onClick={prevSlide}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'>
					<path d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5 11h-5v4l-5-5 5-5v4h5v2z'></path>
				</svg>
			</button>
			<button className='fixed right-8 top-80 z-0' onClick={nextSlide}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'>
					<path d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 15v-4H7v-2h5V7l5 5-5 5z'></path>
				</svg>
			</button>
		</div>
	)
}

export default EconomyIPage
