// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

export default defineConfig({
	site: 'https://itsMe-ThatOneGuy.github.io',
	base: '/mulberry-tree-saloon',
	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [icon()],
});
