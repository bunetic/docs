// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://bunetic.github.io',
	base: '/docs',
	integrations: [
		starlight({
			title: 'Bunetic Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			customCss: [
				// Path to your custom CSS file
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Getting Started', slug: 'start-here/getting-started' },
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
