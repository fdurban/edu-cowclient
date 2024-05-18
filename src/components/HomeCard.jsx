const HomeCard = ({ data }) => {
	return (
		<div className='mx-4 mt-4 h-fit min-h-[200px] min-w-[305px] max-w-[400px] rounded-md bg-[#d9d9d9] px-2 py-2 xl:mt-0  xl:min-h-[70px] xl:min-w-[305px]'>
			<h1 className='w-fit rounded-md bg-white text-lg'>{data.title}</h1>
			<p className='h-[100px] min-h-[30px]'>{data.description}</p>
		</div>
	)
}

export default HomeCard
