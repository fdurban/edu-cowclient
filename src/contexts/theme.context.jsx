import { createContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

function ThemeProviderWrapper(props) {
	const [theme, setTheme] = useState(() => {
		const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
		return darkThemeMq.matches ? 'dark' : 'light'
	})

	const switchTheme = () => {
		setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
	}

	useEffect(() => {
		const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
		const handleChange = e => {
			setTheme(e.matches ? 'dark' : 'light')
		}

		darkThemeMq.addListener(handleChange)
		return () => darkThemeMq.removeListener(handleChange)
	}, [])

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
