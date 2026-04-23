import { defineConfig } from 'vite'

export default defineConfig({
  base: '/OCP-Show-Matchmaker/',
  build: {
    rollupOptions: {
      input: 'index.html',
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
})
