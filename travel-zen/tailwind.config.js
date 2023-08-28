/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'green':'#336D21',
      'white':'#ffffff',
      'black':'#000000',
      'grey':'#3f3f46',
      'darkgreen': "#506B2F",
      'dark':'#0A0A07'
    },
    fontSize: {
      'xl':'100px',
      's':'20px',
      'm':'40px',
      'sm' : '30px',
      'ssm' : '25px'
    }
  },
  plugins: [],
}
