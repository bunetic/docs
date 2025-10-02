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
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/bunetic' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/VmydZEjhSz' }
			],
			customCss: [
				// Path to your custom CSS file
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Getting Started', slug: 'start-here/getting-started' },
						{ label: 'Application', slug: 'start-here/application' },
						{ label: 'Usage', slug: 'start-here/usage' },
						{ label: 'Support', slug: 'support' },
					],
				},
				{
					label: 'Legal',
					items: [
						{ label: 'Terms', slug: 'terms' },
						{ label: 'Privacy', slug: 'privacy' },
					],
				},
			],
		}),
	],
});
