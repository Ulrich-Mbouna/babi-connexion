<template>
  <div>
    <NuxtLoadingIndicator color="#F5831F" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>

useHead({
  titleTemplate: (title) => {
    return title ? `${title} - Babi Connexion` : 'Babi Connexion'
  }
})
</script>
<style lang="scss">
@import "~/assets/styles/scss/uikit.scss";
</style>
