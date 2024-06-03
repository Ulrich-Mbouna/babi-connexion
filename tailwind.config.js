const defaultTheme = require('tailwindcss/defaultTheme');
export default {
    content: [
        './formkit.theme.ts'
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#F5831F'
                },
                secondary:{
                    DEFAULT: '#61C454'
                }
            },
            fontFamily: {
                "montserrat": ['Montserrat', ...defaultTheme.fontFamily.sans],
            }
        }
    },
    important: true,
}
