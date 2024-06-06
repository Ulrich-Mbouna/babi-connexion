<template>
  <div class="uk-card uk-card-small uk-card-default uk-child-width-1-2@l uk-grid-collapse uk-margin" uk-grid>
    <div class="uk-card-media-left uk-cover-container rounded-md group">
      <img class="group-hover:scale-110 transition-all duration-500 " src="/images/horizontal-card.jpg" alt="Product" uk-cover width="324" height="224">
      <canvas width="324" height="224" />
    </div>
    <div class="">
      <div class="uk-card-body p-2">
        <h4 class="font-semibold">Ref :1225556</h4>
        <div class="uk-margin-small text-sm">
          <ul class="uk-list uk-margin-small">
            <li>
              <div class="uk-grid-small" uk-grid>
                <div class="uk-width-1-2 font-semibold">Type : </div>
                <div class="uk-width-expand">Villa</div>
              </div>
            </li>
            <li>
              <div class="uk-grid-small" uk-grid>
                <div class="uk-width-1-2 font-semibold">Prix reel : </div>
                <div class="uk-width-expand">120.000 fcfa</div>
              </div>
            </li>
            <li>
              <div class="uk-grid-small" uk-grid>
                <div class="uk-width-1-2 font-semibold">Prix proposé : </div>
                <div class="uk-width-expand">100.000 fcfa</div>
              </div>
            </li>
            <li>
              <div class="uk-grid-small" uk-grid>
                <div class="uk-width-1-2 font-semibold">Localisation : </div>
                <div class="">Abidjan,Marcory quartier residentiel</div>
              </div>
            </li>
          </ul>
          <div class="uk-margin-top flex justify-between items-center">
            <button class="uk-button uk-button-default uk-button-small btn-success rounded ">Valider</button>
            <button class="uk-button uk-button-default uk-button-small uk-background-muted rounded">Annuler</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineOptions({
  name: 'DemandCard'
})
</script>
