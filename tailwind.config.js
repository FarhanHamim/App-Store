/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066FF',
          50: '#E5F0FF',
          100: '#CCE1FF',
          200: '#99C3FF',
          300: '#66A5FF',
          400: '#3387FF',
          500: '#0066FF',
          600: '#0052CC',
          700: '#003D99',
          800: '#002966',
          900: '#001433',
          950: '#000A1A'
        },
        secondary: "#1e40af",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#0066FF",
          secondary: "#1e40af",
          accent: "#37CDBE",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          "base-200": "#F2F2F2",
          "base-300": "#E5E6E6",
          "base-content": "#1F2937",
        }
      },
      {
        dark: {
          primary: "#0066FF",
          secondary: "#1e40af",
          accent: "#37CDBE",
          neutral: "#3D4451",
          "base-100": "#1F2937",
          "base-200": "#111827",
          "base-300": "#0F172A",
          "base-content": "#F9FAFB",
        }
      }
    ],
  },
} 