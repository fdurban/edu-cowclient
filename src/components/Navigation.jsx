import { useState } from 'react'

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}
	return (
		<div className={` ${isOpen ? '' : 'mr-0'} m-2 p-1 fixed`}>
			<button
				onClick={toggleMenu}
				type='button'
				className=''
				aria-expanded={isOpen ? 'true' : 'false'}>
				<span className='sr-only'>Open main menu</span>
				<div className='w-5 h-5'>
					<svg
						className='w-full h-full'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 17 14'>
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M1 1h15M1 7h15M1 13h15'
						/>
					</svg>
				</div>
			</button>
			<div className={`${isOpen ? 'block' : 'hidden'}`} id='navbar-default'>
				<ul className='font-small flex flex-col ml-2   rounded-md'>
					<li className='my-2'>
						<a
							href='/'
							className='py-2 px-3 my-4 text-black rounded '
							aria-current='page'>
							Home
						</a>
					</li>
					<li className='my-2'>
						<a
							href='profile'
							className=' py-2 px-3 text-black  rounded'
							aria-current='page'>
							Profile
						</a>
					</li>
					<li className='my-2'>
						<a
							href='random'
							className='py-2 px-3 text-black rounded '
							aria-current='page'>
							Random
						</a>
					</li>
					<li className='my-2'>
						<a
							href='otherdata'
							className='py-2 px-3 text-black rounded '
							aria-current='page'>
							Other Data
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navigation
