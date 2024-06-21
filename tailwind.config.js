/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue, js, ts, jsx, tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'app-primary': '#3967E5',
        'app-primary-100': '#395BB9',
        'app-primary-200': '#263E80',
        'app-secondary': '#FF4F4D',
        'app-secondary-100': '#E74845',
        'app-secondary-200': '#CC403D',
        'app-text': '#14142B',
        'app-text-100': '#4E4B66',
        'app-text-200': '#6E7191',
        'app-background': '#263E80',
        'app-background-100': '#F2F2F2',
        'app-background-200': '#14142B29',
        'app-background-gradient': 'linear-gradient(#606C88, #3F4C6B)',
        'app-white': '#FFFFFF',
        'app-white-100': '##FFFFFFCC',
        'primary': 'rgb(var(--primary))',
        'primary-inverse': 'rgb(var(--primary-inverse))',
        'primary-hover': 'rgb(var(--primary-hover))',
        'primary-active-color': 'rgb(var(--primary-active-color))',

        'primary-highlight': 'rgb(var(--primary)/var(--primary-highlight-opacity))',
        'primary-highlight-inverse': 'rgb(var(--primary-highlight-inverse))',
        'primary-highlight-hover': 'rgb(var(--primary)/var(--primary-highlight-hover-opacity))',

        'primary-50': 'rgb(var(--primary-50))',
        'primary-100': 'rgb(var(--primary-100))',
        'primary-200': 'rgb(var(--primary-200))',
        'primary-300': 'rgb(var(--primary-300))',
        'primary-400': 'rgb(var(--primary-400))',
        'primary-500': 'rgb(var(--primary-500))',
        'primary-600': 'rgb(var(--primary-600))',
        'primary-700': 'rgb(var(--primary-700))',
        'primary-800': 'rgb(var(--primary-800))',
        'primary-900': 'rgb(var(--primary-900))',
        'primary-950': 'rgb(var(--primary-950))',

        'surface-0': 'rgb(var(--surface-0))',
        'surface-50': 'rgb(var(--surface-50))',
        'surface-100': 'rgb(var(--surface-100))',
        'surface-200': 'rgb(var(--surface-200))',
        'surface-300': 'rgb(var(--surface-300))',
        'surface-400': 'rgb(var(--surface-400))',
        'surface-500': 'rgb(var(--surface-500))',
        'surface-600': 'rgb(var(--surface-600))',
        'surface-700': 'rgb(var(--surface-700))',
        'surface-800': 'rgb(var(--surface-800))',
        'surface-900': 'rgb(var(--surface-900))',
        'surface-950': 'rgb(var(--surface-950))'
      },
      fontFamily: {
        'poppins': '"Poppins"'
      }
    }
  },
  plugins: [],
}

