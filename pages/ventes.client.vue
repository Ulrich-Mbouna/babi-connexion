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
          <ul class="uk-pagination uk-flex-stretch uk-flex-right@s uk-flex-center *:border [&_li.uk-active_*]:bg-primary [&_li.uk-active_*]:text-white [&_li_a]:h-full">
            <li class="uk-visible@s"><a href="">Précedent</a></li>
            <li class="uk-hidden@s"><a href=""><span uk-pagination-previous=""></span></a></li>
            <li class=""><a>1</a></li>
            <li class=""><a href="">2</a></li>
            <li class=""><a href="">3</a></li>
            <li class="uk-active"><span href="">4</span></li>
            <li class=""><a href="">5</a></li>
            <li class=""><a href="">6</a></li>
            <li class="uk-visible@s"><a href="">Suivant</a></li>
            <li class="uk-hidden@s"><a href=""><span uk-pagination-next=""></span></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script setup lang="ts">

</script>
