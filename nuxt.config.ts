// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ["@nuxtjs/tailwindcss"],
    css: ['~/assets/styles/scss/uikit.scss'],
    tailwindcss: {
        config: {
            important: true, theme: {
                extend: {
                    colors: {
                        primary: {
                            DEFAULT: '#F5831F'
                        },
                        secondary:{
                            DEFAULT: '#61C454'
                        }
                    }, screens: {
                        smd: '960'
                    }
                }
            }
        }, exposeConfig: true
    }
})
