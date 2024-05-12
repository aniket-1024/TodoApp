/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./src/assets/bg.jpg')",
      },
    },
    colors: {
      gray: {
        DEFAULT: '#333333',
        dark: '#444444',
      },
      white:{
        DEFAULT: '#DBDBDB',

      },
      yellow:{
        DEFAULT: '#D39F77',
        f: '#F1EBE3',
      },
      brown:{
         DEFAULT: '#EBCBAB',
         hov: '#D88148'
      },
      textWhite:{
        DEFAULT: '#F1EBE3'
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
      }
      
    }
  },
  plugins: [],
}

