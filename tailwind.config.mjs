/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontSize: {
				'header-2': 'clamp(2rem, 4vw + 1rem, 3.5rem)'
			}
		}
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				'.clip-path-undercut': {
					clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
				},
				'.clip-path-overcut': {
					clipPath: 'polygon(0 0, 100% 0, 100% 97%, 0% 97%)'
				}
			}

			addUtilities(newUtilities)
		}
	]
}
