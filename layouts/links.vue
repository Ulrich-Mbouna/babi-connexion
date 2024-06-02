<script lang="ts" setup>

</script>

<template>
  <section class="uk-section uk-padding-remove-top">
    <div class="bg-primary/50">
      <div class="uk-container text-center py-16 sm:py-20">
        <slot name="banner"/>
      </div>
    </div>
    <div class="uk-margin-medium">
      <slot/>
    </div>
  </section>
</template>

<style scoped>

</style>
