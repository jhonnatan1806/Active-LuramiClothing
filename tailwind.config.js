/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
            backgroundImage: {
                'coming-soon': "url('/img/coming-soon.webp')",
            },
            colors: {
                primary: '#FFA500',
                secondary: '#d8a7d2',
                tertiary: '#3b0347',
            },
		},
	},
	plugins: [],
};
