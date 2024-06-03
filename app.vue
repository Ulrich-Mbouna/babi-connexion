<template>
  <div>
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
