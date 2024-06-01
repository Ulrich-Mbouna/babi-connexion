// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        "@nuxtjs/tailwindcss",
        '@formkit/nuxt',
        'maz-ui/nuxt',
        "@sidebase/nuxt-auth",
        "@nuxt/fonts"
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
      },
        session: {
          enableRefreshOnWindowFocus: false,
            enableRefreshPeriodically: false
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