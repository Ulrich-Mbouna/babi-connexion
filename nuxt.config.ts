// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        "@nuxtjs/tailwindcss",
        '@formkit/nuxt',
        'maz-ui/nuxt',
        "@sidebase/nuxt-auth"
    ],
    auth: {
      provider: {
          type: 'refresh',
          token: {
              signInResponseTokenPointer: '/tokens/access/token'
          },
          refreshToken: {
              signInResponseRefreshTokenPointer: '/tokens/refresh/token'
          },

      }
    },
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
        exposeConfig: true
    },
    imports: {
        dirs: ['types']
    },
    runtimeConfig: {
        public: {
            apiBaseUrl: 'https://twinsdapi.soltgwebservices.net/v1'
        }
    }
})
