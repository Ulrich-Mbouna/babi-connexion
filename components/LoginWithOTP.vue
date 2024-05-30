<script setup lang="ts">
import type {FormKitNode} from "@formkit/core";

const phone = ref("")
const {execute} = useApi("/auth/opt-login", {
  body: {
    phone
  },
  method: "POST",
  immediate: false,
  watch: false
})
const submitHandler = async (data:LoginWithOTP, node: FormKitNode) => {
  phone.value = data.phone
  try {
    const response = await execute()
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
<FormKit type="form" class="" @submit="submitHandler" submit-label="Obtenir un code">
  <FormKit
      label="Télephone"
      name="phone"
      type="phonenumber"
      validation="required"/>
  <p class="text-right -mt-4 uk-margin-medium-bottom ">
    <a class=" text-primary uk-button uk-button-link  normal-case" href="" uk-toggle="target: .login-mode">Utiliser
      un mot de passe</a>
  </p>
</FormKit>
</template>

<style scoped>

</style>
