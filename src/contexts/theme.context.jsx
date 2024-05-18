import { createContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

function ThemeProviderWrapper(props) {
	const [theme, setTheme] = useState('light')

	const switchTheme = () => {
		setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
	}
	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [theme])

	return (
		<ThemeContext.Provider value={{ theme, switchTheme }}>
			{props.children}
		</ThemeContext.Provider>
	)
}

export { ThemeContext, ThemeProviderWrapper }
