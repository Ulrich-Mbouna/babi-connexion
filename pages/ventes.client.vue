<template>
<section class="uk-section uk-section-small">
  <div class="uk-container">
    <div class="uk-position-fixed uk-position-bottom-right uk-position-medium z-10 uk-hidden@s">
      <button uk-toggle="target:#filtre" class="uk-icon-button text-primary bg-white size-12">
        <Icon name="mi:filter" class="text-primary" size="2.4em" />
      </button>
      <div class="" id="filtre" uk-offcanvas="overlay:true;mode:reveal">
        <div class="uk-offcanvas-bar">
          <button class="uk-offcanvas-close" uk-close></button>
          <div class="uk-margin">
            <Filter />
          </div>
        </div>
      </div>
    </div>
    <div class="" uk-grid>
      <div class="uk-width-2-5 uk-width-1-3@l uk-panel uk-visible@m">
        <div class="border-primary border p-1.5 *:text-nowrap h-10  gap-2 flex items-center justify-between">
            <button class="uk-button uk-button-primary uk-button-small">Créer une Alerte</button>
            <button class="uk-button uk-button-primary uk-button-small">Ouvrir la carte</button>
        </div>
        <div class="uk-margin-small">
          <div class="uk-card uk-card-default uk-card-body uk-dark">
            <Filter />
          </div>
        </div>
      </div>
      <div class="uk-panel uk-width-expand">
        <div class="h-10 flex items-center">
          <h5>1200 Bien en ventes</h5>
        </div>
        <div class="uk-margin-small">
            <div class="" v-for="n in 4" :key="n">
              <HorizontalCard />
            </div>
          <Pagination/>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script setup lang="ts">

</script>
