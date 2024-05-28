<script setup>
const props = defineProps({
  context: Object
})

const handleInput = (data) => {
  if (data.isValid) {
    props.context.node.input(data.e164)
  } else {
    if (!data.countryCode) {
      props.context.node.setErrors('Numéro de téléphone est obligatoire')
    } else {
      props.context.node.setErrors('Numéro de téléphone est incorrect')
    }
  }
}
</script>

<template>
  <MazPhoneNumberInput
      :no-flags="false"
      country-selector-display-name
      class="w-full"
      :model-value="props.context._value"
      @update="handleInput"
      country-locale="fr-FR"
      :translations="{
          countrySelector: {
            placeholder: 'Code Pays',
            error: 'Choisissez un pays'
          },
          phoneInput: {
            placeholder: 'Télephone',
            example: 'Ex.'
          }
        }"
  />
</template>

<style scoped>
.m-phone-input {
   border-radius: 0 !important;
}
</style>
