/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
            backgroundImage: {
                'coming-soon': "url('/img/coming-soon.webp')",
            }
		},
	},
	plugins: [],
};
