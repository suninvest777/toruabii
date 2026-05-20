/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#007eb8',
        'brand-blue-dark': '#006a9a',
        'brand-blue-cta': '#66b2d2',
        'brand-blue-light': '#e6f4fa',
        'brand-navy': '#0d517c',
        'brand-red': '#ec2028',
        'surface-soft': '#eff8fd',
        'emergency-red': '#dc2626',
        'trust-blue': '#007eb8',
        'trust-blue-deep': '#0d517c',
        'caution-yellow': '#ffc107',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Nunito Sans"', '"DM Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'home-tight': '-0.01em',
      },
      lineHeight: {
        'home-body': '1.65',
      },
    },
  },
  plugins: [],
}
