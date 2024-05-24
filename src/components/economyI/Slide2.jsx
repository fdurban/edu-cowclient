import { useState } from 'react'
const Slide2 = () => {
	const data = [
		{
			name: 'NECESIDAD',
			description:
				'Deseo o carencia de bienes o servicios esenciales para la vida o el bienestar.',
		},
		{
			name: 'RECURSOS',
			description:
				'Medios disponibles para satisfacer necesidades, incluyendo materiales, humanos y financieros.',
		},
		{
			name: 'BIENES Y SERVICIOS',
			description:
				'Productos tangibles e intangibles que satisfacen necesidades y deseos.',
		},
		{
			name: 'CONSUMO-GASTO',
			description:
				'Uso de bienes y servicios para satisfacer necesidades, generando un gasto económico.',
		},
		{
			name: 'AHORRO',
			description:
				'Parte del ingreso no destinada al consumo y reservada para necesidades futuras.',
		},
		{
			name: 'INVERSIÓN',
			description:
				'Uso de recursos financieros para generar beneficios o ganancias a largo plazo.',
		},
		{
			name: 'OFERTA',
			description:
				'Cantidad de bienes y servicios que los productores están dispuestos a vender a diferentes precios.',
		},
		{
			name: 'DEMANDA',
			description:
				'Cantidad de bienes y servicios que los consumidores están dispuestos a comprar a diferentes precios.',
		},
		{
			name: 'PRECIO',
			description:
				'Cantidad de dinero necesaria para adquirir un bien o servicio.',
		},
		{
			name: 'COSTE DE OPORTUNIDAD',
			description:
				'Valor de la mejor alternativa no elegida al tomar una decisión.',
		},
	]
	const [title, setTitle] = useState('NECESIDAD')
	const [description, setDescription] = useState(data[0].description)

	return (
		<div className='flex w-screen flex-col justify-center xl:flex-row-reverse'>
			<div className='flex flex-col items-center xl:items-start xl:justify-end'>
				<h1 className='flex text-2xl font-bold xl:flex-col xl:text-5xl'>
					<span className='font-lalezar mr-2 text-[#d988d9] xl:mx-0'>
						CONCEPTOS
					</span>
					<span className='font-lalezar dark:text-white'> BÁSICOS</span>
					<span className='font-lalezar hidden dark:text-white xl:block'>
						DE ECONOMÍA
					</span>
				</h1>
				<div className='flex flex-col items-center text-sm xl:grid xl:grid-cols-2 xl:flex-row xl:items-end xl:justify-end'>
					{data.map((value, index) => (
						<p
							key={index}
							className='mt-3 w-48 break-words rounded-lg bg-[#657ff0] py-1 text-center text-white hover:bg-[#d988d9] xl:mr-4'
							onMouseEnter={() => {
								setTitle(value.name)
								setDescription(value.description)
							}}>
							{value.name}
						</p>
					))}
					<p className='mt-3 break-words rounded-lg bg-[#657ff0] py-1 text-center text-white hover:bg-[#d988d9] xl:col-span-2 xl:mr-4'>
						DINERO
					</p>
				</div>
			</div>
			<div className='mb-8 hidden xl:flex xl:flex-col xl:items-center xl:justify-start'>
				<img
					src='/imagevaca2.png'
					alt=''
					className='hidden h-[70%] w-[70%] xl:block'
				/>
				<div className='flex h-52 w-80 flex-col items-center justify-center rounded-lg bg-black dark:bg-white'>
					<h1 className='text-white dark:text-black'>{title}</h1>
					<p className='text-center text-white dark:text-black'>
						{description}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Slide2
