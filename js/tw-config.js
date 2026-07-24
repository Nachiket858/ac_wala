/* =========================================================================
   AERC — Shared Tailwind (Play CDN) theme configuration
   Loaded once on every page (after the Tailwind CDN script) so the design
   tokens live in a single place. Change a colour / font here and it updates
   across the whole site.
   ========================================================================= */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        /* Primary brand blue — taken from the "AC वाला" logo */
        brand: {
          50:  '#eef6fd',
          100: '#d8eafa',
          200: '#b3d4f4',
          300: '#83b8ea',
          400: '#4e97dc',
          500: '#2b7ccb',
          600: '#1b75bc', // logo blue
          700: '#155e97',
          800: '#134c79',
          900: '#123f64',
        },
        /* Deep navy — headings & body text */
        ink: {
          DEFAULT: '#0b2b4e',
          soft: '#334e6b',
          muted: '#5b7086',
        },
        /* Bright azure — highlights & gradient partner */
        accent: {
          DEFAULT: '#2e9be0',
          light: '#5cb6ec',
        },
        /* Icy tints — light section backgrounds */
        ice: {
          50: '#f4f9fd',
          100: '#eaf3fb',
          200: '#dcebf7',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(11, 43, 78, 0.18)',
        card: '0 18px 50px -20px rgba(11, 43, 78, 0.28)',
        glow: '0 20px 60px -15px rgba(43, 124, 203, 0.45)',
        pill: '0 8px 30px -8px rgba(11, 43, 78, 0.22)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'hero-grad': 'linear-gradient(160deg, #155e97 0%, #1b75bc 42%, #2e9be0 100%)',
        'cta-grad': 'linear-gradient(120deg, #123f64 0%, #1b75bc 55%, #2e9be0 100%)',
      },
      container: {
        center: true,
        padding: { DEFAULT: '1.25rem', lg: '2rem' },
        screens: { '2xl': '1200px' },
      },
    },
  },
};
