import HomeCard from '../components/HomeCard'
import { carruselData } from '../data/data'

const HomePage = () => {
	const carrusel = [...carruselData]

	return (
		<>
			<div className='flex h-full items-center justify-center'>
				<img
					src='/vacamascot.png'
					alt='Macosta vaca'
					className='h-[365px] w-[650px] xl:block xl:h-[365px] xl:w-[650px]'
				/>
			</div>
			<div className='flex h-full items-center overflow-y-auto'>
				{carrusel.map((data, index) => (
					<HomeCard data={data} key={index} />
				))}
			</div>
			<center className='mt-4 text-2xl'>
				NUESTROS PARTNERS SON EMPRESAS LÍDERES
			</center>
			<img
				src='/collablogos.png'
				className='my-4 h-[60px] w-[1200px] object-cover'
				alt=''
			/>
		</>
	)
}

export default HomePage
