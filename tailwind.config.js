/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./image/slider-bg-1.jpg')",
        'video-pattern': "url('./image/promo-bg.jpg')",
        'featur-pattern': "url('./image/featured-bg.jpg')"
      },
      colors: {
        'link-pink': '#b01ba5',
        'grey-content': '#68647d',
        'blog-section': '#501755',
        'categories-bg': '#34164b'
      }
    }
  },
  plugins: []
}
