import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Oopsoh',
      fileName: (format: string) => `oopsoh.${format}.js`,
    },
  },
})
