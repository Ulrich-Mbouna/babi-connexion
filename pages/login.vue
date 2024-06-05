<script lang="ts" setup>

definePageMeta({
  name: 'Login',
  layout: 'auth',
  middleware: 'auth',
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/dashboard',
  }
})

useHead({
  title: 'Connexion'
})

//
</script>

<template>
  <div class="uk-card uk-card-body uk-card-small">
    <h3 class="font-medium uk-card-title max-sm:text-xl uk-margin"> Se connecter à son compte</h3>
    <div class="login-mode">
      <LoginWithPassword />
    </div>
    <div class="login-mode" hidden>
      <LoginWithOTP />
    </div>
    <div class="uk-heading-line text-center "><span>Ou</span></div>
    <div class="text-center ">
      <nuxt-link class="text-primary font-medium uk-button uk-button-text" to="/register">Créer votre compte</nuxt-link>
    </div>
  </div>
</template>

<style scoped>

</style>
