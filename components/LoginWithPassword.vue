<script setup lang="ts">
//
import type {FormKitNode} from "@formkit/core";
import {useToast} from "maz-ui";

defineOptions({
  name: 'LoginWithPassword'
})

const {signIn} = useAuth()
const toast = useToast()
// Functions
const handleSignIn = async (data: SignInPayload | LoginWithOTP, node: FormKitNode) => {
  try {
    await signIn(data, {
      callbackUrl: '/dashboard'
    })
    toast.success("Connexion réussit")
    // navigateTo("/register")
  } catch (error) {
    if (error.data?.errors) {
      const {errors} = error.data
      node.setErrors('', errors)
    }
    console.log({error})
  }
}
</script>

<template>
<FormKit type="form" @submit="handleSignIn">
  <div class="uk-margin">
    <FormKit id="email" label="Email ou Numéro de téléphone(avec indicatif)" name="username"
             placeholder="Entrer votre numéro" suffix-icon="email" type="text" validation="required"/>
  </div>
  <div class="uk-margin">
    <FormKit id="password" label="Mot de passe" name="password"
             suffix-icon="eyeClosed" type="password" validation="required|password" @suffix-icon-click="usePasswordVisibility"/>
  </div>
  <p class="text-right -mt-4 uk-margin-medium-bottom ">
    <a class=" text-primary uk-button uk-button-link  normal-case" href="" uk-toggle="target: .login-mode">Utiliser
      votre numéro de téléphone</a>
  </p>
</FormKit>
</template>

<style scoped>

</style>
