import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../contexts/theme.context'
import Slide1 from '../components/economyI/Slide1'
import Slide2 from '../components/economyI/Slide2'
import Slide3 from '../components/economyI/Slide3'
import Slide4 from '../components/economyI/Slide4'
import Slide5 from '../components/economyI/Slide5'
const EconomyIPage = () => {
	const [direction, setDirection] = useState('')
	const [overflow, setOverflow] = useState('')
	const [currentIndex, setCurrentIndex] = useState(0)
	const [prevIndex, setPrevIndex] = useState(null)
	const { theme } = useContext(ThemeContext)

	console.log(direction)

	const contentArray = [
		<Slide1 key={1} />,
		<Slide2 key={2} />,
		<Slide3 key={3} />,
		<Slide4 key={4} />,
		<Slide5 key={5} />,
	]

	const nextSlide = () => {
		setDirection('next')
		setOverflow('overflow-hidden')
		setPrevIndex(currentIndex + 1)
		setCurrentIndex(prevIndex =>
			prevIndex === contentArray.length - 1 ? 0 : prevIndex + 1,
		)
	}

	const prevSlide = () => {
		setDirection('prev')
		setOverflow('overflow-hidden')
		setPrevIndex(currentIndex - 1)
		setCurrentIndex(prevIndex =>
			prevIndex === 0 ? contentArray.length - 1 : prevIndex - 1,
		)
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			setDirection('')
			setOverflow('')
			setPrevIndex(null)
		}, 500)
		return () => clearTimeout(timer)
	}, [direction, overflow])

	return (
		<div className={`${overflow}`}>
			{contentArray.map((slide, index) => (
				<div key={index}>{slide}</div>
			))}
			<button className='fixed left-8 top-80 z-10' onClick={prevSlide}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					stroke={theme === 'light' ? 'black' : 'white'}
					viewBox='0 0 24 24'>
					<path d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5 11h-5v4l-5-5 5-5v4h5v2z'></path>
				</svg>
			</button>
			<button className='fixed right-8 top-80 z-10' onClick={nextSlide}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					stroke={theme === 'light' ? 'black' : 'white'}
					viewBox='0 0 24 24'>
					<path d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 15v-4H7v-2h5V7l5 5-5 5z'></path>
				</svg>
			</button>
		</div>
	)
}

export default EconomyIPage

{
	/* <div
	className={`${direction === 'next' ? 'animate-slideRightIn' : direction === 'prev' ? 'animate-slideLeftOut' : ''}`}>
	{contentArray[prevIndex]}
</div>
<div
	className={`${direction === 'next' ? 'animate-slideRightIn' : direction === 'prev' ? 'animate-slideLeftOut' : ''}`}>
	{contentArray[currentIndex]}
</div> */
}
