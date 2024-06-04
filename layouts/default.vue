<script setup lang="ts">

import TheHeader from "~/components/TheHeader.vue";
</script>

<template>
<div class="">
  <TheHeader />
  <main>
    <slot />
  </main>
  <TheFooter />
</div>
</template>

<style scoped>

</style>
