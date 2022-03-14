module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Conduit'],
      serif: ['Novarese'],
      mono: ['Novarese'],
      display: ['Novarese'],
      body: ['Novarese']
    },
  },
  plugins: [require('daisyui')],
};
