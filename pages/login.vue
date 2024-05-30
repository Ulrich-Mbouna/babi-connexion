<script setup lang="ts">
import {useToast} from "maz-ui";
definePageMeta({
  name: 'Login',
  layout: 'auth',
  auth:{
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  }
})
//
const toast = useToast()

//
const {signIn} = useAuth()
// Functions
const handleSignIn = async (data:SignInPayload, node: FormKitNode) => {

    try {
      const res = await signIn(data)
      toast.success("Connexion réussit")
      console.log({res})
      // navigateTo("/register")
    } catch (error) {
    if(error.data?.errors) {
      const {errors} = error.data
      node.setErrors('',errors)
    }
      console.log({error})
    }
}
</script>

<template>
  <div class="">
    <FormKit type="form" @submit="handleSignIn">
      <div class="uk-margin">
        <FormKit type="email" suffix-icon="email" label="Email" placeholder="alex@gmail.com" id="email" name="username" validation="required"  />
      </div>
      <div class="uk-margin">
        <FormKit type="password" label="Mot de passe" @suffix-icon-click="usePasswordVisibility" suffix-icon="eyeClosed" id="password" name="password" validation="required|password"  />
      </div>
      <p class="text-right -mt-4 uk-margin-medium-bottom ">
        <a href="" class=" text-primary uk-button uk-button-link  normal-case">Utiliser votre numéro de téléphone</a>
      </p>
    </FormKit>
    <div class="uk-heading-line text-center "><span>Ou</span></div>
    <div class="text-center ">
      <nuxt-link to="/register" class="text-primary font-medium uk-button uk-button-text">Créer votre compte</nuxt-link>
    </div>
  </div>

</template>

<style scoped>

</style>
