/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./pages/**/*.{js,ts,jsx,tsx,mdx}",  
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
       colors: {
        primary: {
          DEFAULT: '#4f46e5',
          hover: '#4338ca',
          focus: '#6366f1'
        },
        dark: {
          900: '#111827',
          800: '#1f2937',
          700: '#374151',
          600: '#4b5563',
        }
      }
    },
  },
  plugins: [],
}

