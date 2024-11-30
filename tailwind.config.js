/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Adding Poppins font
      },
      textStrokeWidth: {
        2: '2px',
      },
      textStrokeColor: {
        white: 'white',
      },
      textStroke: {
        DEFAULT: '1px white', // Default stroke with width and color
      },
    },
    plugins: [
      function ({ addUtilities, theme }) {
        const newUtilities = {};
        Object.keys(theme('textStrokeWidth')).forEach(key => {
          const width = theme('textStrokeWidth')[key];
          Object.keys(theme('textStrokeColor')).forEach(colorKey => {
            const color = theme('textStrokeColor')[colorKey];
            const name = `.text-stroke-${key}-${colorKey}`;
            newUtilities[name] = {
              '-webkit-text-stroke-width': width,
              '-webkit-text-stroke-color': color,
            };
          });
        });
        addUtilities(newUtilities, ['responsive', 'hover']);
      },
    ],
  }
}



// module.exports = {
//   theme: {
//     extend: {
//       textStrokeWidth: {
//         2: '2px',
//       },
//       textStrokeColor: {
//         white: 'white',
//       },
//     },
//   },
//   plugins: [
//     function ({ addUtilities, theme }) {
//       const newUtilities = {};
//       Object.keys(theme('textStrokeWidth')).forEach(key => {
//         const width = theme('textStrokeWidth')[key];
//         Object.keys(theme('textStrokeColor')).forEach(colorKey => {
//           const color = theme('textStrokeColor')[colorKey];
//           const name = `.text-stroke-${key}-${colorKey}`;
//           newUtilities[name] = {
//             '-webkit-text-stroke-width': width,
//             '-webkit-text-stroke-color': color,
//           };
//         });
//       });
//       addUtilities(newUtilities, ['responsive', 'hover']);
//     },
//   ],
// };
