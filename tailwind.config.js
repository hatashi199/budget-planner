/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundColor: {
				purpleD: '#2c075e',
				whiteD: '#f5f2ff',
				purpleL_Dark: '#4e2f78',
				purpleL_Light: '#ddd7e5'
			},
			textColor: {
				purpleD: '#2c075e',
				whiteD: '#f5f2ff',
				purpleL_Dark: '#4e2f78',
				purpleL_Light: '#ddd7e5',
				error: '#B00020'
			},
			borderColor: {
				purpleD: '#2c075e',
				whiteD: '#f5f2ff'
			},
			borderRadius: {
				rad12: '12px'
			},
			padding: {
				pad10: '10px',
				pad15: '15px',
				pad20: '20px',
				pad24: '24px',
				pad68: '68px'
			},
			margin: {
				mar10: '10px',
				mar15: '15px',
				mar20: '20px',
				mar24: '24px',
				mar68: '68px'
			},
			fontFamily: {
				mulishEL: 'Mulish-ExtraLight',
				mulishR: 'Mulish-Regular',
				mulishB: 'Mulish-Bold',
				mulishEB: 'Mulish-ExtraBold'
			}
		}
	},
	plugins: []
};
