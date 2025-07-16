import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/movie_app_2025/',
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-transform-react-remove-prop-types',
            { removeImport: false } 
          ]
        ]
      }
    })
  ]
}));