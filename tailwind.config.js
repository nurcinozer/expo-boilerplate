module.exports = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['RubikRegular'],
        'rubik-medium': ['RubikMedium'],
        'rubik-semibold': ['RubikSemibold'],
        'rubik-regular': ['RubikRegular'],
        'poppins-medium': ['PoppinsMedium'],
      },
      colors: {
        primary: {
          100: '#EBF1FF',
          200: '#D8E3FF',
          300: '#B1C6FF',
          400: '#89AAFE',
          500: '#628DFE',
          600: '#3B71FE',
        },
        secondary: {
          100: '#FFECEC',
          200: '#FFD9D9',
          300: '#FEB3B3',
          400: '#FE8E8D',
          500: '#FE6867',
          600: '#FD4241',
        },
        error: '#FD4241',
        dark: '#23262F',
        label: '#A6A7BC',
        border: '#393F4D',
      },
    },
  },
};
