<script setup lang="ts">
import NumberInput from "~/components/NumberInput.vue";
import {createInput} from "@formkit/vue";
import type {FormKitNode} from "@formkit/core";
import {useToast} from "maz-ui";
//
const toast = useToast()

const handleIconClick = (node:FormKitNode, e: MouseEvent) => {
  node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye';
  node.props.type = node.props.type === 'password' ? 'text' : 'password'
}

// Create Input Number
const phonenumber = createInput(NumberInput)

// Fonctions
const { signUp} = useAuth()
const handleSubmit = async (data: {"multi-steps": {personal: UserRegister, identity: IdentityPayload}},node: FormKitNode) => {
  const formData = new FormData();
  const {personal,identity} = data["multi-steps"]

  formData.append("name", personal.name);
  formData.append("firstName", personal.firstName);
  formData.append("email", personal.email);
  formData.append("phone", personal.phone);
  formData.append("password", personal.password);
  formData.append("role", identity.role);
  formData.append("avatar", identity.avatar[0].file);
  formData.append("identityCard", identity.identityCard[0].file);

  try {
      await signUp(formData, undefined, {
        preventLoginFlow: true
      })

    toast.success("Votre compte a été créé avec succès, Merci de vous connecter !");
    await navigateTo("/login")


  } catch (error) {
    if(error.data?.errors){
      const {errors} = error.data
      console.log({errors})
      node.setErrors(['There is Errors in the form'],{
        ...errors
      })
    }
    console.log({error})
  }
}
</script>

<template>
<FormKit type="form" :actions="false" #default="{value}" @submit="handleSubmit">
  <FormKit type="multi-step" :allow-incomplete="false" tab-style="progress" name="multi-steps">
    <FormKit type="step" name="personal" label="Information Personelles" next-label="Suivant">
      <div class="grid grid-cols-2 gap-2">
        <FormKit label="Nom" name="name" placeholder="Nom" validation="required"  class="uk-input" />
        <FormKit label="Prénom" name="firstName" placeholder="Prénom" validation="required"  class="uk-input" />
      </div>
      <FormKit
          :type="phonenumber"
          :config="{
            classes:{
              outer: 'max-w-full'
            }
          }"
          name="phone"
          validation="required"
          label="Télephone" />
      <FormKit label="Adresse Email" type="email" name="email" placeholder='alex@gmail.com' validation="email|required" />
      <FormKit
          suffix-icon="eyeClosed" @suffix-icon-click="handleIconClick"
          label="Mot de Passe" name="password" type="password" validation="password|required" />
      <FormKit
          suffix-icon="eyeClosed" name="password_confirm" @suffix-icon-click="handleIconClick"
          label="Confirmer mot de password" type="password" validation="confirm|required" />
    </FormKit>
    <FormKit type="step" name="identity" previous-label="Précédent" label="Identité" :config="{
      classes:{
        outer: 'min-w-40'
      }
    }">
      <FormKit label="Categorie" type="select" :options="{
        agent: 'Agent',
        demarcheur: 'Demarcheur',
      }" name="role"  validation="required" />
      <FormKit label="Photo de Profil" type="file"  name="avatar"  validation="required" />
      <FormKit label="Carte d’identité" type="file"  name="identityCard"  validation="required" />
      <template #stepNext>
        <FormKit type="submit" class="uk-button justify-end" />
      </template>
    </FormKit>
  </FormKit>
</FormKit>
</template>

<style scoped>

</style>
