<template>
  <div class="">
    <ToTop />
    <section class="uk-section uk-section-small uk-padding-remove-vertical">
      <div class="uk-position-relative" uk-slideshow="ratio:false">
        <div class="uk-slideshow-items" uk-height-viewport="min-height:500;offset-top: true; offset-bottom:25"
          uk-toggle="mode:media; media:@m;cls:uk-height-viewport">
          <div class="">
            <img alt="Banner Image" height="2424" src="/images/banner1.jpeg" uk-cover width="4096">
          </div>
          <div class="">
            <img alt="Banner Image" height="2424" src="/images/banner1.jpeg" uk-cover width="4096">
          </div>
        </div>
        <ul class="uk-slideshow-nav uk-position-bottom uk-dotnav uk-flex uk-flex-center uk-margin"></ul>
        <div class="uk-position-top">
          <TheHeader/>
        </div>
      </div>
    </section>
    <section class="uk-section uk-section-small uk-padding-small uk-section-muted" uk-sticky>
      <div class="uk-container uk-container-expand">
        <FilterNav/>
      </div>
    </section>
    <section id="top-announces" class="uk-section uk-section-xsmall">
      <div class="uk-container uk-container-large">
        <h3 class="font-medium">Top des annonces</h3>
        <div class="">
          <div class="" uk-slider="center:true">
            <div class="uk-position-relative uk-light">
              <div class="uk-slider-items p-3 uk-child-width-1-4@l uk-child-width-1-2@s uk-child-width-1-3@m uk-grid uk-grid-small">
                <div class="" v-for="i in 6">
                  <Card/>
                </div>
              </div>
              <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="" uk-slidenav-previous
                uk-slider-item="previous"></a>
              <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="" uk-slidenav-next
                uk-slider-item="next"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="uk-section uk-section-small uk-section-muted">
      <div class="uk-container uk-container-large" >
        <div class="">
          <h3 class="font-medium">Categories</h3>
          <div class="uk-child-width-1-3@m uk-child-width-1-2@s uk-child-width-1-4@l uk-text-center uk-grid-small uk-grid-match" uk-grid>
            <nuxt-link class="uk-link-toggle" v-for="category in categories" :key="category.id">
              <div class="group uk-overflow-hidden">
                <div class="uk-inline uk-text-center w-full">
                  <img alt="" :src="`/images/${category.image}`"
                    class="group-hover:scale-110 transition-all duration-500 h-[190px] w-full">
                  <div
                    class="uk-overlay uk-overlay-primary bg-black/30  uk-position-cover uk-flex uk-flex-center uk-flex-middle">
                    <h3 class="text-3xl uk-text-uppercase uk-heading-primary-">{{category.title}}</h3>
                  </div>
                </div>
              </div>
            </nuxt-link>

          </div>
        </div>
      </div>
    </section>
    <section class="uk-section uk-section-small">
      <div class="uk-container uk-container-large">
        <div class="uk-flex uk-flex-between uk-flex-middle uk-flex-wrap uk-margin-small">
          <h3 class="font-medium m-0">Les annonces récentes</h3>
          <nuxt-link class="text-primary no-underline group uk-flex uk-flex-middle uk-button-text">
            <span>Voir plus</span>
            <span uk-icon="arrow-right" class="uk-text-primary mt-1 transition-all duration-500 group-hover:translate-x-1"></span>
          </nuxt-link>
        </div>
        <div class="uk-child-width-1-4@l uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-small" uk-grid>
            <nuxt-link class="uk-link-toggle" v-for="i in 8">
              <Card />
            </nuxt-link>
        </div>
      </div>
    </section>
    <section class="uk-section uk-section-small uk-section-muted" id="publicity">
      <div class="uk-container uk-container-expand">
      <div class="uk-placeholder uk-text-center">
        <p class="text-xl md:text-5xl">Espace publicité</p>
      </div>
      </div>
    </section>
    <TheFooter />
  </div>
</template>

<script lang="ts" setup>
import Card from "~/components/Style/Card.vue";

definePageMeta({
  layout: false
})

const categories = [
  {
    id: 1,
    title: 'Entrepôts',
    image: 'entrepot.png'
  },
  {
    id: 2,
    title: 'Terrains',
    image: 'le-terrain.jpg'
  },
  {
    id: 3,
    title: 'Appartements',
    image: 'appartement.png'
  },
  {
    id: 4,
    title: 'Villas',
    image: 'villa.png'
  },
  {
    id: 5,
    title: 'Studios',
    image: 'studios.png'
  },
  {
    id: 6,
    title: 'Meublés',
    image: 'meubles.png'
  },
  {
    id: 7,
    title: 'Bureaux',
    image: 'bureaux.png'
  },
  {
    id: 8,
    title: 'Magasins',
    image: 'magasins.png'
  },
]
</script>
