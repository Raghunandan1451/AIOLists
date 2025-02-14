import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	optimizeDeps: {
		include: ['pdfjs-dist'], // optionally specify dependency name
		esbuildOptions: {
			supported: {
				'top-level-await': true,
			},
		},
	},
	resolve: {
		alias: {
			'@src': '/src',
			'@components': '/src/components',
			'@layout': '/src/layout',
			'@store': '/src/store',
			'@utils': '/src/utils',
		},
	},
});
