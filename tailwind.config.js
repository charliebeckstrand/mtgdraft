// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: {
				50: '#EAECEE',
				100: '#D5D8DC',
				200: '#ABB2B9',
				300: '#808B96',
				400: '#566573',
				500: '#2C3E50',
				600: '#273746',
				700: '#455A64',
				800: '#1C2833',
				900: '#17202A',
			},
			brown: '#795548',
			primary: '#03A9F4',
			success: '#4CAF50',
			warning: '#FFC107',
			danger: '#F44336',
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
