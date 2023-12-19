import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
    },

    screens: {
      'xxs' : { 'min' : '300px',  'max' : '411px' },   // Smartphones (e.g., older iPhone models)
      'xs'  : { 'min' : '412px',  'max' : '639px' },   // Smartphones (e.g., Android phones)
      'sm'  : { 'min' : '640px',  'max' : '767px' },   // Smartphones (e.g., Android phones)
      'md'  : { 'min' : '768px',  'max' : '1023px' },  // Tablets (e.g., iPad Mini)
      'lg'  : { 'min' : '1024px', 'max' : '1279px' },  // Larger Tablets (e.g., iPad Retina)
      'xl'  : { 'min' : '1280px', 'max' : '1536px' },  // Laptops (e.g., standard laptop resolution)
      '2xl' : { 'min' : '1537px', 'max' : '1919px' },  // Larger Laptops or High-resolution Monitors
      '3xl' : { 'min' : '1920px', 'max' : '2559px' },  // Large Monitors / TVs (e.g., Full HD TVs)
      '4xl' : { 'min' : '2560px', 'max' : '3839px' },  // High-resolution Monitors (e.g., QHD monitors)
      '5xl' : { 'min' : '3840px'},                     // 4K UHD Monitors / TVs
    },
    
  },
  plugins: [],
}
export default config
