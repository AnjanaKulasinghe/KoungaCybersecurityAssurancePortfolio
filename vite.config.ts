import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative production URLs work on both the GitHub Pages project path and a custom domain.
const base = process.env.GITHUB_ACTIONS ? './' : '/';

export default defineConfig({ plugins: [react()], base });
