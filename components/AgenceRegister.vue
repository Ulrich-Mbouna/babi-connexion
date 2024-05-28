<script setup>
import NumberInput from "~/components/NumberInput.vue";
import {createInput} from "@formkit/vue";

const handleIconClick = (node, e) => {
  node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye';
  node.props.type = node.props.type === 'password' ? 'text' : 'password'
}

// Create Input Number
const phonenumber = createInput(NumberInput)
</script>

<template>
<FormKit type="form" :actions="false" #default="{value}" @submit="handleSubmit">
  <FormKit type="multi-step" :allow-incomplete="false" tab-style="progress">
    <FormKit type="step" name="personal" label="Information Personelles" next-label="Suivant">
      <div class="grid grid-cols-2 gap-2">
        <FormKit label="Nom" name="name" placeholder="Nom" validation="required"  class="uk-input" />
        <FormKit label="Prénom" name="firstname" placeholder="Prénom" validation="required"  class="uk-input" />
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
