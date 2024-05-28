// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ["@nuxtjs/tailwindcss", '@formkit/nuxt', 'maz-ui/nuxt'],
    "formkit": {
        autoImport: true
    },
    mazUi: {
        injectComponents: true, injectAos: {
            injectCss: true,
        }, injectUseToast: true, injectUseThemeHandler: true, devtools: true
    },
    tailwindcss: {
        exposeConfig: true
    },
    imports: {
        dirs: ['types']
    }
})
