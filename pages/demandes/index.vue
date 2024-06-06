<script setup lang="ts">

definePageMeta({
  layout: 'authenticated'
})

import DemandCard from "~/pages/demandes/DemandCard.vue";

const {data:demandes, pending, error} = await useApi("/requests")
</script>

<template>
<div class="">
    <h3 class="font-semibold">Mes demandes de visite</h3>
  <div class="uk-child-width-1-2@s uk-margin uk-grid-small" uk-grid>
    <div class="uk-panel" v-for="n in 6" :key="n">
      <DemandCard/>
    </div>
  </div>
  <Pagination />
</div>
</template>

