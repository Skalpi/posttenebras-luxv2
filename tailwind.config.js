/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'Inter' als Hauptschrift, System-Fonts als Fallback
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        // 'Merriweather' als Serifenschrift, Georgia als Fallback
        serif: ['Merriweather', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
      colors: {
        slate: {
          900: 'var(--color-surface-dark)',
          800: 'var(--color-surface-dim)',
        },
        amber: {
          500: 'var(--color-primary-light)',
          600: 'var(--color-primary)',
          700: 'var(--color-primary-dark)',
        },
        stone: {
          50: 'var(--color-bg-paper)',
        }
      }
    },
  },
  plugins: [],
}