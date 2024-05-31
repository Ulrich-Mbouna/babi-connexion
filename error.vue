<script setup lang="ts">
import type {NuxtError} from "#app";

defineProps({
  error: Object as () => NuxtError,
})
const handleError = () => clearError({redirect: '/'})
</script>

<template>
<section class="uk-section uk-padding-remove-vertical uk-height-viewport uk-flex uk-flex-center uk-flex-middle">
  <div class="uk-container uk-container-xsmall">
    <div class="uk-width-large@s" uk-toggle="mode:media; media:@m; cls:uk-width-large@s uk-width-medium">
      <img src="/images/error.png" alt="Error Logo" />
    </div>
    <div class="text-center uk-margin">
      <h1>{{error.statusCode}}</h1>
      <p>{{error.message}}</p>
      <div class="" v-if="error.stack" v-html="error.stack"></div>
    </div>
    <div class="uk-margin text-center">
      <button class="uk-button uk-button-primary uk-width-medium rounded" @click="handleError" >Retour à l'accueil</button>
    </div>
  </div>
</section>
</template>

<style scoped>

</style>
