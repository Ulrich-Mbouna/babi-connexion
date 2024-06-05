<script setup lang="ts">

import {refresh} from "@formkit/icons";

definePageMeta({
  name: 'Dashboard',
  middleware: 'auth'
})
useHead({
  title: 'Dashboard'
})

const {data,token, refreshToken} = useAuth()
</script>

<template>
<section class="uk-section uk-section-xsmall uk-height-viewport">
  <div class="uk-container">
    <h2>Welcome to dashboard</h2>
    <nuxt-link to="/login" class="uk-button-primary uk-button">Login</nuxt-link>
<!--    <pre >Token : {{token}}</pre>-->
<!--    <pre >refreshToken : {{refreshToken}}</pre>-->
<!--    <pre >User : {{data}}</pre>-->
  </div>
</section>
</template>

<style scoped>

</style>
