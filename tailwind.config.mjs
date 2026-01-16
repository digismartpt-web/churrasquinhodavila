/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1f2937', // Gris foncé élégant
        secondary: '#374151', // Gris moyen
        bordeaux: '#111827',  // Noir/Gris très foncé pour accents
        accent: '#f3f4f6', // Gris très clair
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      }
    }
  },
  plugins: []
}