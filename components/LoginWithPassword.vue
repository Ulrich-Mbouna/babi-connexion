<script setup lang="ts">
//
import type {FormKitNode} from "@formkit/core";
import {useToast} from "maz-ui";

const {signIn} = useAuth()
const toast = useToast()
// Functions
const handleSignIn = async (data: SignInPayload | LoginWithOTP, node: FormKitNode) => {
  try {
    const res = await signIn(data)
    toast.success("Connexion réussit")
    console.log({res})
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
             placeholder="alex@gmail.com" suffix-icon="email" type="email" validation="required"/>
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
