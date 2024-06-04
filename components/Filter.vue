<template>
  <div class="">
    <h3 class="space-x-1.5">
      <Icon name="mi:filter" class="text-primary" size="1.5em"/>
      <span>Filtre</span>
    </h3>
    <div class="flex justify-between items-center uk-margin-small uk-heading-divider">
      <p class="font-bold">Afficher par</p>
      <button class="uk-button uk-button-text text-primary">Effacer</button>
    </div>
    <div class="">
      <FormKit type="form" :actions="false">
        <ul class="uk-nav-default" uk-nav="multiple:true">
          <li class="uk-nav-header">Type d’annonce</li>
          <li class="uk-parent">
            <a href="" class="flex justify-between">
                    <span>
                      <input type="checkbox"/>
                      Location - Vente - Meublé
                    </span>
              <span uk-nav-parent-icon></span>
            </a>
            <ul class="uk-nav-sub">
              <li>
                <a href="" class="flex justify-between">
                        <span class="flex gap-2">
                          <input type="checkbox"/>
                          <span>Location</span>
                        </span>
                  <span>210</span>
                </a>
              </li>
              <li>
                <a href="" class="flex justify-between">
                        <span class="flex gap-2">
                          <input type="checkbox"/>
                          <span>Vente</span>
                        </span>
                  <span>10</span>
                </a>
              </li>
              <li>
                <a href="" class="flex justify-between">
                        <span class="flex gap-2">
                          <input type="checkbox"/>
                          <span>Meublés</span>
                        </span>
                  <span>15</span>
                </a>
              </li>
            </ul>
          </li>
          <li class="uk-nav-header">Type de bien</li>
          <li class="uk-parent">
            <a href="" class="flex justify-between">
                    <span>
                      <input type="checkbox"/>
                      Tout
                    </span>
              <span uk-nav-parent-icon></span>
            </a>
            <ul class="uk-nav-sub">
              <li>
                <a href="" class="flex justify-between">
                        <span class="flex gap-2">
                          <input type="checkbox"/>
                          <span>Location</span>
                        </span>
                  <span>210</span>
                </a>
              </li>
              <li>
                <a href="" class="flex justify-between">
                        <span class="flex gap-2">
                          <input type="checkbox"/>
                          <span>Vente</span>
                        </span>
                  <span>10</span>
                </a>
              </li>
              <li>
                <a href="" class="flex justify-between">
                        <span class="flex gap-2">
                          <input type="checkbox"/>
                          <span>Meublés</span>
                        </span>
                  <span>15</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="uk-margin">
          <div class="flex flex-col">
            <FormKit type="select" label="Ville" :options="villes" name="ville" id="ville"/>
            <FormKit type="select" label="Commune" :options="villes" name="ville" id="ville"/>
            <FormKit type="select" label="Nombre de pièce" :options="villes" name="ville" id="ville"/>
          </div>
          <div
              class="uk-placeholder text-black font-medium uppercase uk-background-muted uk-height-large flex uk-flex-top uk-flex-center uk-flex-middle">
            Espace publicitaire
          </div>
        </div>
      </FormKit>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  name: 'Filter'
})
const villes = {
  dakar: 'Dakar',
  yaounde: 'Yaoundé',
  libreville: 'Libreville',
  paris: 'Paris',
}
</script>
