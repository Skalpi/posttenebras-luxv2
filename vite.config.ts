import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // WICHTIG: Der Pfad muss dem Ordner auf dem Server entsprechen
  base: '/prophetien/', 
});