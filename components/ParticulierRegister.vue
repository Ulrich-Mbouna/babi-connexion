<script setup >
const phoneNumber = ref(null)
const countryCode = ref(null)
const isPasswordVisible = ref(false)
const isConfirmationPasswordVisible = ref(false)
</script>

<template>
<div class="">
  <form action="" class="uk-form-stacked uk-child-width-1-1" uk-grid>
    <fieldset class="uk-fieldset">
      <legend class="uk-legend">Informations d’ authentification</legend>
      <a href="#" uk-toggle="target:.register-section" class="flex items-center group text-primary">
        <span uk-icon="arrow-left" class="group-hover:-translate-x-1 transition-all duration-500 align-middle"></span>
        <span >Back</span>
      </a>
      <div class="uk-margin">
          <div class="uk-grid-small uk-child-width-1-1 uk-child-width-1-2@m" uk-grid>
            <div class="">
              <label class="uk-form-label" for="name">Nom</label>
              <div class="uk-form-controls">
                <input type="text" id="name" placeholder="Nom" class="uk-input">
              </div>
            </div>
            <div class="">
              <label class="uk-form-label" for="prenom">Prénom</label>
              <div class="uk-form-controls">
                <input type="text" id="prenom" placeholder="Prénom" class="uk-input">
              </div>
            </div>
          </div>
      </div>
      <div class="uk-margin">
        <label for="email" class="uk-form-label">Adresse Email</label>
        <div class="uk-form-controls">
          <MazPhoneNumberInput
              v-model="phoneNumber"
              v-model:country-code="countryCode"
              class="w-full"
          />
        </div>

      </div>
      <div class="uk-margin">
        <label for="email" class="uk-form-label">Adresse Email</label>
        <div class="uk-form-controls">
          <input type="email" id="email" placeholder="alex@gmail.com" name="email" class="uk-input">
        </div>
      </div>
      <div class="uk-margin">
        <label for="password" class="uk-form-label">Mot de passe</label>
        <div class="uk-form-controls uk-inline w-full">
          <a href="#" @click.prevent="isPasswordVisible = !isPasswordVisible" class="uk-form-icon uk-form-icon-flip uk-link-reset" :uk-icon="isPasswordVisible ? 'eye' : 'eye-slash'" />
          <input :type="isPasswordVisible ? 'text' : 'password'" id="password" placeholder="Entrer votre mot de passe" name="password" class="uk-input">
        </div>
      </div>
      <div class="uk-margin">
        <label for="password_confirm" class="uk-form-label">Confirmer votre mot de passe</label>
        <div class="uk-form-controls uk-inline w-full">
          <a href="#" @click.prevent="isConfirmationPasswordVisible = !isConfirmationPasswordVisible" class="uk-form-icon uk-form-icon-flip uk-link-reset" :uk-icon="isConfirmationPasswordVisible ? 'eye' : 'eye-slash'" />
          <input :type="isConfirmationPasswordVisible ? 'text' : 'password'" id="password_confirm" placeholder="Confirmer votre mot de passe" name="password_confirm" class="uk-input">
        </div>
      </div>
      <div class="uk-margin text-center">
        <button class="uk-button uk-button-primary w-full">Soumettre</button>
      </div>
      <div class="uk-heading-line text-center"><span>Ou</span></div>
      <div class="flex gap-x-2 justify-center text-lg flex-wrap">
        <span>Vous êtes déjà avec nous ?</span>
        <nuxt-link to="/login" class="text-primary font-medium" >Se connecter</nuxt-link>
      </div>
    </fieldset>
  </form>
</div>
</template>

<style scoped>

</style>
