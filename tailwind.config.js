/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/components/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				liquidism: ['liquidism', 'sans-serif'],
				zomboi: ['zomboi', 'sans-serif'],
				sans: ['roboslab', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
