const HomeCard = ({ data }) => {
	return (
		<div className='mx-4 max-h-[128px] min-w-[404px] rounded-md bg-gray-400 px-2 py-2'>
			<h1 className='w-fit rounded-md bg-white text-lg'>{data.title}</h1>
			<p className=''>{data.description}</p>
		</div>
	)
}

export default HomeCard
