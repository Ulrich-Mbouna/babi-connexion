<template>
  <nav class="uk-navbar-container bg-black/25">
    <div class="uk-container uk-container-expand">
      <div class="items-center" v-bind="navbarAttributes">
        <div class="uk-navbar-left">
          <nuxt-link aria-label="Back to Home" class="uk-navbar-item uk-logo" to="/">
            <img alt="Baby Connexion Logo" src="/images/baby-connexion-logo.svg">
          </nuxt-link>
        </div>
        <div class="uk-navbar-center uk-visible@s">
          <ul class="uk-navbar-nav [&>li>a]:text-white">
            <li>
              <nuxt-link to="/">Accueil</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/location">Location</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/ventes">Ventes</nuxt-link>
            </li>
            <li>
              <nuxt-link to="">Services</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="uk-navbar-right">
          <a class="uk-navbar-toggle uk-hidden@m uk-navbar-toggle-animate" href=""
             uk-navbar-toggle-icon="ratio:1.4"></a>
          <div class="uk-navbar-dropdown w-full">
            <ul class="uk-nav uk-navbar-dropdown-nav [&_li_a]:text-black [&_li_a]:text-lg ">
              <li>
                <nuxt-link to="/">Accueil</nuxt-link>
              </li>
              <li>
                <nuxt-link to="">Location</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/ventes">Ventes</nuxt-link>
              </li>
              <li>
                <nuxt-link to="">Services</nuxt-link>
              </li>
              <li class="uk-nav-divider"></li>
              <li>
                <nuxt-link class="uk-button uk-button-small uk-button-text text-black" to="/register">Créer un compte
                </nuxt-link>
              </li>
              <li>
                <nuxt-link class="uk-button uk-button-small uk-button-default text-black" to="/login">Se connecter
                </nuxt-link>
              </li>
            </ul>
          </div>

          <div class="uk-navbar-item  uk-visible@m">
            <div v-if="!isLogged" class="flex gap-3 uk-light">
              <nuxt-link class="uk-button uk-button-small uk-button-text" to="/register">Créer un compte</nuxt-link>
              <nuxt-link class="uk-button uk-button-small uk-button-text" to="/login">Se connecter</nuxt-link>
            </div>
            <div v-else class="">
              <a href="#" class="uk-light hover:text-white text-lg">
                <Icon name="mingcute:user-4-fill" size="1.5em"/>
                {{ user.firstName + ' ' + user.name }}
              </a>
              <div class="uk-navbar-dropdown uk-padding-small rounded text-xl">
                <ul class="uk-nav uk-navbar-dropdown-nav uk-nav-secondary">
                  <li class="uk-active">
                    <a href="">
                      <Icon name="uil:setting" size="1.3em"/>
                      Setting
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <Icon name="mdi:account" size="1.3em"/>
                      Account
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <Icon name="material-symbols:logout" size="1.3em"/>
                      Déconnexion
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
defineOptions({})

const {data: user, status} = useAuth()

const isLogged = computed(() => {
  return status.value === "authenticated"
})

const navbarAttributes = computed(() => {
  return !isLogged ? {
    'uk-navbar':"dropbar:true; dropbar-anchor:!.uk-navbar-container; target:!.uk-navbar; mode:click"
  } : {
    'uk-navbar':"mode:click"
  }
})
</script>
