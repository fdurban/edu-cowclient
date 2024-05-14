const DropDown = ({
	title,
	isActive,
	toggleDropdown,
	content1,
	content2,
	content3,
}) => {
	return (
		<div className='mx-6 mt-5 items-center'>
			<button
				onClick={toggleDropdown}
				className='rounded-lg py-2.5 text-center text-sm font-medium text-black'
				type='button'>
				{title}
			</button>
			{isActive && (
				<div className='fixed z-10 w-fit divide-y divide-gray-100 rounded-lg border-4 border-gray-300 bg-white dark:bg-white'>
					<ul className='space-y-1 p-3 text-sm text-gray-700 dark:text-gray-200'>
						<li>
							<div className='flex rounded p-2 '>
								<label className='inline-flex w-full cursor-pointer items-center'>
									<input type='checkbox' value='' className='peer sr-only' />
									<div className='peer relative h-5 w-9 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[""] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:translate-x-[-100%] dark:border-gray-500 dark:bg-gray-600 dark:peer-focus:ring-blue-800'></div>
									<span className='ms-3 text-sm font-medium text-black dark:text-black'>
										{content1}
									</span>
								</label>
							</div>
						</li>
						<li>
							<div className='flex rounded p-2'>
								<label className='inline-flex w-full cursor-pointer items-center'>
									<input type='checkbox' value='' className='peer sr-only' />
									<div className='peer relative h-5 w-9 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[""] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:translate-x-[-100%] dark:border-gray-500 dark:bg-gray-600 dark:peer-focus:ring-blue-800'></div>
									<span className='ms-3 text-sm font-medium text-black dark:text-black'>
										{content2}
									</span>
								</label>
							</div>
						</li>
						<li>
							<div className='flex rounded p-2'>
								<label className='inline-flex w-full cursor-pointer items-center'>
									<input type='checkbox' value='' className='peer sr-only' />
									<div className='peer relative h-5 w-9 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[""] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:translate-x-[-100%] dark:border-gray-500 dark:bg-gray-600 dark:peer-focus:ring-blue-800'></div>
									<span className='ms-3 text-sm font-medium text-black dark:text-black'>
										{content3}
									</span>
								</label>
							</div>
						</li>
					</ul>
				</div>
			)}
		</div>
	)
}

export default DropDown
