<template>
  <ConfigProvider :use-id="useIdFunction">
    <div>
      <NuxtLoadingIndicator color="#F5831F" />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </ConfigProvider>
</template>
<script setup>

import {ConfigProvider} from "radix-vue";

useHead({
  titleTemplate: (title) => {
    return title ? `${title} - Babi Connexion` : 'Babi Connexion'
  }
})

const useIdFunction = () => useId()
</script>
<style lang="scss">
@import "~/assets/styles/scss/uikit.scss";
</style>
