<script setup lang="ts">
import {useToast} from "maz-ui";

const props = defineProps({
  phone: String
})

const toast = useToast()
const handleSubmit = async (data, node) => {
  try {
    const response = await $fetch('/api/auth/verify-phone', {
      method: 'POST',
      body: {
        phone: props.phone,
        ...data
      }
    })

    console.log({response})

    if(!response.status){
        toast.error(''+response.message)
      node.setErrors(response.message)
    } else {
      toast.success(''+response.message)
    }
  } catch (error) {
    console.log({error})
  }
}
</script>

<template>
<FormKit type="form" submit-label="Verfier" @submit="handleSubmit">
  <p class="uk-text-muted">Merci de renseigner le code que vous avez reçu par sms. </p>
  <FormKit type="otpinput" name="code" label="Saissisez le code" />
</FormKit>
</template>

<style scoped>

</style>
