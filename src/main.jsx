import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProviderWrapper } from './contexts/theme.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Router>
		<ThemeProviderWrapper>
			<App />
		</ThemeProviderWrapper>
	</Router>,
)
