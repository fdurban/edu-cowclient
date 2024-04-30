export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				customColor: '#782c0a',
			},
			width: {
				'757px': '757px',
			},
			height: {
				'224px': '224px',
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
				slideInRight: {
					from: { transform: 'translateX(100%)' },
					to: { transform: 'translateX(0%)' },
				},
				slideOutRight: {
					from: { transform: 'translateX(0%)' },
					to: { transform: 'translateX(100%)' },
				},
			},
			animation: {
				fadeDown: 'fadeDown 0.5s ease-out forwards',
				fadeUp: 'fadeUp 0.5s ease-out forwards',
				moveUp: 'moveUp 0.5s ease-out forwards',
				moveDown: 'moveDown 0.5s ease-out forwards',
				typing: 'typing 5s steps(65), blink .7s infinite',
				slideInRight: 'slideInRight 0.5s forwards',
				slideOutRight: 'slideOutRight 0.5s forwards',
			},
		},
	},
	plugins: [],
}
