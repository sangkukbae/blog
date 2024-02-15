// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	semi: false,
	tabWidth: 4,
	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro'
			}
		}
	]
};
