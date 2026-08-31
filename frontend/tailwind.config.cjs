/** @type {import('tailwindcss').Config} */

/** Builds a Tailwind color scale that reads from CSS custom properties, so
 *  bg-brand-700/50 (opacity modifiers) keep working and the whole palette
 *  can be re-themed at runtime by editing assets/css/tokens.css only. */
function cssVarScale(name, shades) {
  const scale = {}
  for (const shade of shades) {
    scale[shade] = `rgb(var(--color-${name}-${shade}) / <alpha-value>)`
  }
  return scale
}

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

module.exports = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./composables/**/*.{js,ts}",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },

      // Colors — semantic tokens backed by CSS variables (see assets/css/tokens.css).
      colors: {
        brand: {
          ...cssVarScale('brand', shades),
          DEFAULT: 'rgb(var(--color-brand-700) / <alpha-value>)',
          dark: 'rgb(var(--color-brand-dark) / <alpha-value>)',
          darker: 'rgb(var(--color-brand-darker) / <alpha-value>)',
        },
        accent: {
          ...cssVarScale('accent', shades),
          DEFAULT: 'rgb(var(--color-accent-700) / <alpha-value>)',
          dark: 'rgb(var(--color-accent-900) / <alpha-value>)',
          glow: 'rgb(var(--color-accent-glow) / <alpha-value>)',
        },
        cream: {
          DEFAULT: 'rgb(var(--color-cream) / <alpha-value>)',
          dark: 'rgb(var(--color-cream-dark) / <alpha-value>)',
        },
        'brand-icon': {
          from: 'rgb(var(--color-brand-icon-from) / <alpha-value>)',
          to: 'rgb(var(--color-brand-icon-to) / <alpha-value>)',
        },
        // "Escorpião Casa" sub-brand palette — see assets/css/tokens.css.
        casa: {
          DEFAULT: 'rgb(var(--color-casa-primary) / <alpha-value>)',
          dark: 'rgb(var(--color-casa-primary-dark) / <alpha-value>)',
          darker: 'rgb(var(--color-casa-primary-darker) / <alpha-value>)',
          blue: 'rgb(var(--color-casa-blue) / <alpha-value>)',
          'blue-dark': 'rgb(var(--color-casa-blue-dark) / <alpha-value>)',
          green: 'rgb(var(--color-casa-green) / <alpha-value>)',
          'green-dark': 'rgb(var(--color-casa-green-dark) / <alpha-value>)',
          surface: 'rgb(var(--color-casa-surface) / <alpha-value>)',
          'surface-dark': 'rgb(var(--color-casa-surface-dark) / <alpha-value>)',
        },
      },

      // Typography — semantic sizes on top of Tailwind's default scale.
      fontSize: {
        display: ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        h1: ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '800' }],
        h2: ['1.875rem', { lineHeight: '1.2', fontWeight: '800' }],
        h3: ['1.5rem', { lineHeight: '1.3', fontWeight: '700' }],
        lead: ['1.125rem', { lineHeight: '1.6', fontWeight: '500' }],
        body: ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        small: ['0.875rem', { lineHeight: '1.5', fontWeight: '500' }],
      },

      // Spacing — reusable layout rhythm tokens.
      spacing: {
        'section-y': 'var(--space-section-y)',
        'section-y-mobile': 'var(--space-section-y-mobile)',
        'card-p': 'var(--space-card-p)',
      },

      // Radius — shared shape language for banners, cards, pills.
      borderRadius: {
        card: 'var(--radius-card)',
        banner: 'var(--radius-banner)',
        pill: 'var(--radius-pill)',
      },

      // Shadows — elevation tokens for cards and floating elements.
      boxShadow: {
        card: 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        float: 'var(--shadow-float)',
      },
    },
  },
  plugins: [],
}
