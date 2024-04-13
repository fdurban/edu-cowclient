import background from '../assets/backgroundnubes.webp'
import FormularioHubspot from '../components/HubspotFormulario'

const HomePage = () => {
	return (
		<div
			className='h-screen flex items-center justify-center'
			style={{
				backgroundImage: `url(${background})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}>
			<div className='mx-auto text-center pb-24'>
				<p>Conexión con Hubspot</p>

				<FormularioHubspot />
			</div>
		</div>
	)
}

export default HomePage
