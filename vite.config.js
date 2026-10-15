import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHash } from 'crypto'
import { readFileSync } from 'fs'

// Cache-busting version for the CV links: changes only when a PDF changes
const cvVersion = createHash('md5')
  .update(readFileSync('public/cv/cv_fernando_roman.pdf'))
  .update(readFileSync('public/cv/cv_fernando_roman_en.pdf'))
  .digest('hex')
  .slice(0, 8)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
  define: {
    __CV_VERSION__: JSON.stringify(cvVersion),
  },
})
