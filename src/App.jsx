import Navigation from './components/Navigation'
import AppRoutes from './routes/AppRoutes'

function App() {
	return (
		<>
			<div className='flex'>
				<Navigation />
			</div>
			<AppRoutes />
		</>
	)
}

export default App
