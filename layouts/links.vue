<script lang="ts" setup>

</script>

<template>
  <section class="uk-section uk-section-small uk-padding-remove-vertical">
    <div class="bg-primary/50">
      <div class="uk-container text-center py-16 sm:py-20">
        <slot name="banner"/>
      </div>
    </div>
    <div class="uk-section uk-section-small uk-section-muted">
      <slot/>
    </div>
  </section>
</template>

<style scoped>

</style>
