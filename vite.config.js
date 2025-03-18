import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import viteCompression from 'vite-plugin-compression'
import legacy from '@vitejs/plugin-legacy'


export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tailwindcss(),
    ...(mode === 'production'
      ? [
          viteCompression({ algorithm: 'brotliCompress' }), // Brotli for production
          viteCompression({ algorithm: 'gzip' }), // Gzip fallback
        ]
      : []), // Disable compression in dev for faster builds
    legacy({
      targets: ['defaults', 'not IE 11'], // Improve browser compatibility
    }),
  ],
  build: {
    target: 'esnext', // Ensure modern JS output
    chunkSizeWarningLimit: 500, // Reduce large chunk warnings
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        unused: true, // Remove unused functions/variables
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-icons')) return 'react-icons'
            if (id.includes('@fortawesome')) return 'fortawesome-icons'
            if (id.includes('gsap')) return 'gsap'
            return 'vendor'
          }
        },
      },
    },
    cssCodeSplit: true, // Enable CSS code splitting
    assetsInlineLimit: 4096, // Avoid large inlined assets for better caching
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // Pre-bundle common dependencies
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/global.scss";`, // Optimize CSS imports
      },
    },
  },
}))
