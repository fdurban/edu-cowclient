import Navigation from './components/Navigation'
import AppRoutes from './routes/AppRoutes'

function App() {
	return (
		<div className='flex h-screen'>
			<Navigation />
			<div className='bg-bg w-screen'>
				<AppRoutes />
			</div>
		</div>
	)
}

export default App
