<template>
  <nav class="uk-navbar-container bg-black/25 uk-light">
    <div class="uk-container uk-container-expand">
      <div class="items-center"
           uk-navbar="dropbar:true; dropbar-anchor:!.uk-navbar-container; target:!.uk-navbar">
        <div class="uk-navbar-left">
          <nuxt-link to="/" aria-label="Back to Home" class="uk-navbar-item uk-logo">
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
                <nuxt-link to="/register" class="uk-button uk-button-small uk-button-text text-black">Créer un compte
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/login" class="uk-button uk-button-small uk-button-default text-black">Se connecter
                </nuxt-link>
              </li>
            </ul>
          </div>

          <div class="uk-navbar-item gap-3 uk-visible@m">
            <nuxt-link to="/register" class="uk-button uk-button-small uk-button-text">Créer un compte</nuxt-link>
            <nuxt-link to="/login" class="uk-button uk-button-small uk-button-text">Se connecter</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'TheHeader'
}
</script>
