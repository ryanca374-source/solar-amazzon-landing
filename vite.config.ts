import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const pagesBasePath = repositoryName ? `/${repositoryName}/` : '/'

export default defineConfig({
  base: pagesBasePath,
  plugins: [react(), tailwindcss()],
})
