<script lang="ts" setup>
import type { FormKitNode } from "@formkit/core";
import UIkit from "uikit";
import { useToast } from "maz-ui";

defineOptions({
  name: 'LoginWithOTP'
})

const phone = ref("")
const toast = useToast()
const runtimeConfig = useRuntimeConfig()
const submitHandler = async (formData: LoginWithOTP, node: FormKitNode) => {
  phone.value = formData.phone
  // UIkit toggler
  const toggler = UIkit.toggle("", {
    target: '.otp-login'
  })

  try {
    const response: { status: boolean, message: string } = await $fetch("/auth/otp-login", {
      method: "POST",
      body: formData,
      baseURL: runtimeConfig.public.apiBaseUrl as string
    })

    if (response.status) {
      toast.success('' + response.message)
      toggler.toggle()
    } else {
      toast.error('' + response.message)
      node.setErrors(response.message)
    }
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="">
    <div class="otp-login">
      <FormKit class="" submit-label="Obtenir un code" type="form" @submit="submitHandler">
        <FormKit label="Télephone" name="phone" type="phonenumber" validation="required" />
        <p class="text-right -mt-4 uk-margin-medium-bottom ">
          <a class=" text-primary uk-button uk-button-link  normal-case" href=""
            uk-toggle="target: .login-mode">Utiliser
            un mot de passe</a>
        </p>
      </FormKit>
    </div>
    <div class="otp-login" hidden>
      <VerifiedOTP :phone />
    </div>
  </div>
</template>

<style scoped></style>
