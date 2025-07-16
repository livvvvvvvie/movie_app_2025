import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-transform-react-remove-prop-types',
            { removeImport: false } // ✅ 이 안쪽에 옵션 넣어야 함
          ]
        ]
      }
    })
  ]
});