export function slugify(input: string): string {
	return (
		input
			// Convert to lowercase
			.toLowerCase()
			// Replace spaces and underscores with a hyphen
			.replace(/[\s_]+/g, '-')
			// Remove all non-word chars except hyphens
			.replace(/[^\w-]+/g, '')
			// Replace multiple hyphens with a single hyphen
			.replace(/-+/g, '-')
			// Trim hyphens at the start and end of the string
			.replace(/^-+|-+$/g, '')
	)
}
