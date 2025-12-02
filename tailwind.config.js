/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				uzum: '#7f4dff',
				dark: '#0f172a',
			},
			keyframes: {
				heart: {
					'0%': { transform: 'scale(100%)' },
					'100%': { transform: 'scale(120%)' },
				},
			},
			animation: {
				heart: 'heart 0.2s ease-in-out',
			},
		},
	},
	plugins: [],
	darkMode: 'class',
});
