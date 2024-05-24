export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				customColor: '#782c0a',
				bg: '#87d3f5',
			},
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
				typing: {
					'0%': {
						width: '0%',
						opacity: '0',
					},
					'100%': {
						width: '65ch',
					},
				},
				blink: {
					'50%': {
						borderColor: 'transparent',
					},
					'100%': {
						borderColor: 'white',
					},
				},
				slideRightIn: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' },
				},
				slideRightOut: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				slideLeftIn: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' },
				},
				slideLeftOut: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' },
				},
			},
			animation: {
				fadeDown: 'fadeDown 0.5s ease-out forwards',
				fadeUp: 'fadeUp 0.5s ease-out forwards',
				moveUp: 'moveUp 0.5s ease-out forwards',
				moveDown: 'moveDown 0.5s ease-out forwards',
				typing: 'typing 5s steps(65), blink .7s infinite',
				scroll: 'scroll 13s linear infinite;',
				slideRightIn: 'slideRightIn 0.5s ease-in-out',
				slideRightOut: 'slideRightOut 0.5s ease-in-out',
				slideLeftIn: 'slideLeftIn 0.5s ease-in-out',
				slideLeftOut: 'slideLeftOut 0.5s ease-in-out',
			},
		},
	},
	plugins: [],
}
