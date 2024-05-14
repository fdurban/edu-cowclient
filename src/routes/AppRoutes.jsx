import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutUsPage from '../pages/AboutUsPage'
import CoursesPage from '../pages/CoursesPage'
import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'
import MethodologyPage from '../pages/MethodologyPage'
import EconomyIPage from '../pages/EconomyIPage'

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/aboutus' element={<AboutUsPage />} />
			<Route path='/courses' element={<CoursesPage />} />
			<Route path='/login' element={<LoginPage />} />
			<Route path='/signup' element={<SignUpPage />} />
			<Route path='/methodology' element={<MethodologyPage />} />
			<Route path='/economyi' element={<EconomyIPage />} />
			<Route path='/' element={<HomePage />} />
			<Route path='/' element={<HomePage />} />
			<Route path='/' element={<HomePage />} />
			<Route path='/' element={<HomePage />} />
			<Route path='/' element={<HomePage />} />
			<Route path='*' element={'404'} />
		</Routes>
	)
}

export default AppRoutes
