/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundColor: {
				purpleD: '#2c075e',
				whiteD: '#ffffff',
				purpleL_Dark: '#4e2f78',
				purpleL_Light: '#ddd7e5'
			},
			textColor: {
				purpleD: '#2c075e',
				whiteD: '#ffffff',
				purpleL_Dark: '#4e2f78',
				purpleL_Light: '#ddd7e5'
			},
			borderRadius: {
				rad12: '12px'
			}
		}
	},
	plugins: []
};
