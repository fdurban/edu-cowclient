/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			keyframes: {
				fadeDown: {
					'0%': { opacity: '0', transform: 'translateY(-10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeUp: {
					'0%': { opacity: '1', transform: 'translateY(10px)' },
					'100%': { opacity: '0', transform: 'translateY(0)' },
				},
				moveUp: {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(-30px)' },
				},
				moveDown: {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(25px)' },
				},
			},
			animation: {
				fadeDown: 'fadeDown 0.5s ease-out forwards',
				fadeUp: 'fadeUp 0.5s ease-out forwards',
				moveUp: 'moveUp 0.5s ease-out forwards',
				moveDown: 'moveDown 0.5s ease-out forwards',
			},
		},
	},
	plugins: [],
}
