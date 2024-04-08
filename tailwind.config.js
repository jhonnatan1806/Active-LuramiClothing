/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
            backgroundImage: {
                'coming-soon': "url('img/coming-soon.webp')",
                'banner': "url('img/background.jpg')"
            },
            colors: {
                primary: '#ff6600',
                secondary: '#d8a7d2',
                tertiary: '#3b0347',
            },
		},
	},
	plugins: [],
};
