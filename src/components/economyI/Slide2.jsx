import vacamascot from '../../../public/vacamascot2.jpg'
const Slide2 = () => {
	return (
		<div className='flex h-full flex-col items-center justify-center'>
			<div className='flex flex-col xl:flex-row-reverse'>
				<div className='ml-4 flex flex-col'>
					<h1 className='mt-6 flex flex-row items-start text-center text-2xl font-bold xl:flex-col xl:text-5xl'>
						<span className='font-lalezar  mr-2 text-[#d988d9] xl:mx-0'>
							CONCEPTOS
						</span>
						<h1 className='font-lalezar'> BÁSICOS</h1>
						<span className='font-lalezar hidden xl:block'>DE ECONOMÍA</span>
					</h1>

					<div className='flex flex-col xl:grid xl:grid-cols-2 xl:flex-row'>
						<p className='mt-3 rounded-lg bg-[#657ff0] py-2 text-center text-white hover:bg-[#d988d9] xl:mr-4'>
							NECESIDAD
						</p>
						<p className='mt-3 rounded-lg bg-[#657ff0] py-2 text-center text-white hover:bg-[#d988d9] xl:mr-4'>
							RECURSOS
						</p>
						<p className='mt-3 rounded-lg bg-[#657ff0] py-2 text-center text-white hover:bg-[#d988d9] xl:mr-4'>
							BIENES Y SERVICIOS
						</p>
						<p className='mt-3 rounded-lg bg-[#657ff0] py-2 text-center text-white hover:bg-[#d988d9] xl:mr-4'>
							CONSUMO-GASTO
						</p>
						<p className='mt-3 rounded-lg bg-[#657ff0] py-2 text-center text-white hover:bg-[#d988d9] xl:mr-4'>
							AHORRO
						</p>
						<p className='mt-3 rounded-lg bg-[#657ff0] py-2 text-center text-white hover:bg-[#d988d9] xl:mr-4'>
							INVERSIÓN
						</p>
						<p className='mt-3 rounded-lg bg-[#657ff0] py-2 text-center  text-white hover:bg-[#d988d9] xl:mr-4'>
							OFERTA
						</p>
						<p className='mt-3 rounded-lg bg-[#657ff0] py-2 text-center  text-white hover:bg-[#d988d9] xl:mr-4'>
							DEMANDA
						</p>
						<p className='mt-3 rounded-lg bg-[#657ff0] py-2 text-center  text-white hover:bg-[#d988d9] xl:mr-4'>
							PRECIO
						</p>
						<p className='mt-3 rounded-lg bg-[#657ff0] py-2 text-center text-white  hover:bg-[#d988d9] xl:mr-4'>
							COSTE DE OPORTUNIDAD
						</p>
						<p className='mt-3 rounded-lg bg-[#657ff0] py-2 text-center  text-white hover:bg-[#d988d9] xl:col-span-2 xl:mr-4 '>
							DINERO
						</p>
					</div>
				</div>
				<div className='hidden  xl:flex xl:flex-col xl:items-center xl:justify-start'>
					<img src={vacamascot} alt='' className='hidden h-56 w-56 xl:block' />
					<div className='mt-2.5 flex h-52 w-80 flex-col items-center justify-center rounded-lg bg-black'>
						<h1 className='text-white'>TITLE</h1>
						<p className='text-center text-white'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Repudiandae iusto ullam molestias possimus! Expedita voluptatibus,
							natus eaque et, rerum debitis non inventore ipsam ut adipisci
							quidem alias accusamus voluptates sapiente.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Slide2

{
	/* <div className='hidden w-64 rounded-md bg-black text-white'>
						<h1>TÍTULO</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
							voluptas ipsa quia soluta quo minima! Accusamus dolores, eaque,
							culpa, eveniet neque sunt expedita doloribus qui placeat tempora
							pariatur at nesciunt.
						</p>
					</div> */
}
