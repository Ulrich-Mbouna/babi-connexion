// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ["@nuxtjs/tailwindcss",'@formkit/nuxt','maz-ui/nuxt'],
    css: ['~/assets/styles/scss/uikit.scss'],
    "formkit": {
        autoImport: true
    },
    mazUi: {
        injectComponents: true,
        injectAos: {
            injectCss: true,
        },
        injectUseToast: true,
        injectUseThemeHandler: true,
        devtools: true
    },
    tailwindcss: {
        config: {
            important: true,
            theme: {
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
