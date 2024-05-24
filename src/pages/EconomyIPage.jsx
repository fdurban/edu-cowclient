import { useState, useContext } from 'react'
import { ThemeContext } from '../contexts/theme.context'
import Slide1 from '../components/economyI/Slide1'
import Slide2 from '../components/economyI/Slide2'
import Slide3 from '../components/economyI/Slide3'
import Slide4 from '../components/economyI/Slide4'
import Slide5 from '../components/economyI/Slide5'

const EconomyIPage = () => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const { theme } = useContext(ThemeContext)

	const contentArray = [
		<Slide1 key={1} />,
		<Slide2 key={2} />,
		<Slide3 key={3} />,
		<Slide4 key={4} />,
		<Slide5 key={5} />,
	]

	const nextSlide = () => {
		if (currentIndex === contentArray.length - 1) setCurrentIndex(0)
		else setCurrentIndex(currentIndex + 1)
	}

	const prevSlide = () => {
		if (currentIndex === 0) setCurrentIndex(contentArray.length - 1)
		else setCurrentIndex(currentIndex - 1)
	}

	return (
		<div className='overflow-hidden'>
			<div
				className={`flex transition duration-1000 ease-out`}
				style={{
					transform: `translateX(-${currentIndex * 100}%)`,
				}}>
				{contentArray.map((s, index) => {
					return <div key={index}>{s}</div>
				})}
			</div>
			<button className='fixed left-8 top-80 z-0' onClick={prevSlide}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					stroke={theme === 'light' ? 'black' : 'white'}
					viewBox='0 0 24 24'>
					<path d='M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z'></path>
				</svg>
			</button>
			<button className='fixed right-8 top-80 z-0' onClick={nextSlide}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					stroke={theme === 'light' ? 'black' : 'white'}
					viewBox='0 0 24 24'>
					<path d='M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z'></path>
				</svg>
			</button>
		</div>
	)
}

export default EconomyIPage
