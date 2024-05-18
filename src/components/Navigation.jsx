import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../contexts/theme.context'
const Navigation = ({ navbarVisible, toggleNavbar }) => {
	const { theme, switchTheme } = useContext(ThemeContext)
	return (
		<nav
			className={`${navbarVisible ? 'fixed' : 'hidden xl:sticky xl:top-0 xl:flex'} animate-slideLeft z-10 h-full w-full bg-white xl:static xl:flex xl:h-fit xl:animate-none xl:justify-between xl:py-4 dark:bg-black`}>
			<div className='mt-2 flex justify-between xl:mt-0'>
				<Link to='/' className='ml-2'>
					<img
						src={
							theme === 'light' ? '/educowlogo.png' : '/logoeducowblanco.png'
						}
						alt=''
						className='h-[30px] w-[158px]'
					/>
				</Link>
			</div>
			<button
				className='ml-2 rounded-full bg-gray-300 p-2'
				onClick={switchTheme}>
				{theme === 'light' ? '🌛' : '🌞'}
			</button>
			<div className='mr-4 flex justify-end xl:items-end'>
				<ul className='mt-16 flex w-fit flex-col items-end text-lg xl:mt-0 xl:mt-1 xl:flex-row'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='h-6 w-6 pb-8 xl:hidden'
						onClick={toggleNavbar}>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M6 18 18 6M6 6l12 12'
						/>
					</svg>
					<li className='mb-6 ml-10 xl:mb-0'>
						<Link to='/courses' onClick={toggleNavbar}>
							<span>
								<h1 className='mx-auto fill-current text-black hover:text-green-500 dark:text-white'>
									CURSOS
								</h1>
							</span>
						</Link>
					</li>
					<li className='mb-6 ml-10 xl:mb-0'>
						<Link to='/aboutus' onClick={toggleNavbar}>
							<span>
								<h1 className='mx-auto fill-current text-black hover:text-green-500 dark:text-white'>
									SOBRE NOSOTROS
								</h1>
							</span>
						</Link>
					</li>
					<li className='mb-6 ml-10 xl:mb-0'>
						<Link to='/' onClick={toggleNavbar}>
							<span className='flex items-center'>
								<h1 className=' text-black hover:text-green-500 dark:text-white'>
									HABLEMOS
								</h1>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={3}
									stroke='currentColor'
									className='ml-1 h-4 w-4'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25'
									/>
								</svg>
							</span>
						</Link>
					</li>
					<li className='ml-10'>
						<Link to='/login' onClick={toggleNavbar}>
							<span className='flex items-center'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'>
									<path d='M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z'></path>
								</svg>
								<h1 className='ml-2 fill-current text-black hover:text-green-500 dark:text-white'>
									LOG IN
								</h1>
							</span>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navigation
