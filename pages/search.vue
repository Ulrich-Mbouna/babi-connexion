<script setup lang="ts">
definePageMeta({
  name: 'Search'
})

useHead({
  title: 'Search'
})
</script>

<template>
<section class="uk-section uk-section-xsmall uk-section-muted">
  <div class="uk-container">
    <div class="uk-margin bg-silver-light p-3 uk-visible@s">
      <FilterNav />
    </div>
    <div class="uk-position-fixed uk-position-medium uk-position-bottom-right z-10 uk-hidden@s">
      <button uk-toggle="target:#FilterNav" class="uk-icon-button text-primary bg-white size-12">
        <Icon name="mi:filter" class="text-primary" size="2.4em" />
      </button>
      <div class="" id="FilterNav" uk-offcanvas="overlay:true;mode:reveal">
        <div class="uk-offcanvas-bar uk-flex uk-flex-col">
          <button class="uk-offcanvas-close" uk-close></button>
          <div class="uk-margin-medium">
            <FilterNav classes="uk-child-width-1-1" />
          </div>
        </div>
      </div>
    </div>
    <div class="uk-grid-match   uk-grid-small" uk-grid>
      <div class="max-h-screen overflow-y-auto uk-width-expand@m">
        <div class="sm:pr-3 " uk-grid>
          <div class="" v-for="n in 10" :key="n">
            <HorizontalCard />
          </div>
        </div>
      </div>
      <div class="uk-width-1-3@m uk-width-1-2@l">
        <div class="uk-placeholder uk-flex-center uk-flex  uk-flex-middle">
          <h3>Google Map Ici</h3>
        </div>
      </div>
    </div>

  </div>
</section>
</template>

<style scoped>

</style>
