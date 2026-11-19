import {defineConfig} from 'astro/config'

// Página 100% estática: se regenera cada vez que publican un cambio en Sanity
// (vía webhook → Deploy Hook de Vercel/Netlify, ver README).
export default defineConfig({
  site: 'https://www.ejemplo.com.py', // cambiá por el dominio final
})
