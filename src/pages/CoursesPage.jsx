import DropDown from '../components/DropDown'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const CoursesPage = () => {
	const titles = [
		{
			name: 'Economía Básica',
			image: 'bgimageeconomycourse.jpeg',
			duration: '3',
			link: 'economyi',
			kind: '100% online',
			price: '500',
		},
		{
			name: 'Inteligencia Artificial',
			image: 'aicourseimage.jpeg',
			duration: '3',
			kind: '100% online',
			price: '500',
		},
		{
			name: 'Mercados Globales',
			image: 'bg.jpeg',
			duration: '3',
			kind: '100% online',
			price: '500',
		},
	]
	const dropdowns = [
		{
			title: 'Duración',
			content1: '<50',
			content2: '>50',
			content3: '>100',
		},
		{
			title: 'Estudio por áreas',
			content1: 'IA',
			content2: 'Economía',
			content3: 'Trading',
		},
		{
			title: 'Estudio por tipos',
			content1: 'Básico',
			content2: 'Intermedio',
			content3: 'Avanzado',
		},
	]
	const [activeDropdown, setActiveDropdown] = useState(null)

	const toggleDropdown = index => {
		setActiveDropdown(activeDropdown === index ? null : index)
	}

	return (
		<div className='h-full'>
			<div className='flex items-center justify-center'>
				{dropdowns.map(({ title, content1, content2, content3 }, index) => (
					<DropDown
						key={index}
						title={title}
						content1={content1}
						content2={content2}
						content3={content3}
						isActive={activeDropdown === index}
						toggleDropdown={() => toggleDropdown(index)}
					/>
				))}
			</div>
			<div className='mx-6 mt-5 flex justify-around overflow-x-auto overflow-y-hidden'>
				{titles.map((course, index) => (
					<Link to={`/${course.link}`} key=''>
						<div
							key={index}
							className='relative ml-5 h-80 w-80 flex-none rounded-lg bg-cover bg-center shadow-2xl'
							style={{ backgroundImage: `url('/${course.image}')` }}>
							<div className='absolute bottom-0 left-0 right-0 rounded-b-lg p-2 text-white'>
								<h1 className='text-lg'>{course.name}</h1>
								<div className='flex justify-start text-white'>
									<p className='rounded-md  border-2 border-white'>
										{course.duration} Meses
									</p>
									<p className='ml-4 rounded-md  border-2 border-white '>
										{course.kind}
									</p>
									<p className='ml-4 rounded-md  border-2 border-white '>
										{course.price} €
									</p>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default CoursesPage
