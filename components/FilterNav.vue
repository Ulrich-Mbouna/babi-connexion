<template>
  <div
      :class="!classes ? 'uk-child-width-1-3@s uk-flex-between uk-child-width-1-6@m uk-grid-small' : classes "
      uk-grid
      :uk-toggle="!classes ? `mode:media; media: (min-width: 375px); cls:uk-child-width-1-2` : '.test'"
  >
    <div class="uk-panel">
      <p class="test"></p>
      <select id="" class="uk-select" name="">
        <option disabled selected value="">Type de bien</option>
        <option value="">Location</option>
        <option value="">Vente</option>
        <option value="">Meuble</option>
      </select>
    </div>
    <div class="uk-panel">
      <select id="" class="uk-select" name="">
        <option disabled selected value="">Ville</option>
        <option value="">Abidjan</option>
        <option value="">Yaounde</option>
        <option value="">Douala</option>
      </select>
    </div>
    <div class="uk-panel">
      <select id="" class="uk-select" name="">
        <option disabled selected value="">Commune</option>
        <option value="">Abidjan</option>
        <option value="">Yaounde</option>
        <option value="">Douala</option>
      </select>
    </div>
    <div class="uk-panel ">
      <select id="" class="uk-select" name="">
        <option disabled selected value="">Quartier</option>
        <option value="">Abidjan</option>
        <option value="">Yaounde</option>
        <option value="">Douala</option>
      </select>
    </div>
    <div class="uk-panel">
      <select id="" class="uk-select" name="">
        <option disabled selected value="">Budget Max</option>
        <option value="">Abidjan</option>
        <option value="">Yaounde</option>
        <option value="">Douala</option>
      </select>
    </div>
    <div class="uk-panel text-center">
      <button class="uk-button uk-button-primary uk-width-1-1 ">Rechercher</button>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  name: 'FilterNav'
})

const props = defineProps({
  classes: {
    type: String,
    default: '',
    required: false
  }
})
</script>
