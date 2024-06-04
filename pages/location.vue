<script lang="ts" setup>
definePageMeta({
  name: 'Location'
})
useHead({
  title: 'Location'
})
</script>

<template>
  <section class="uk-section uk-section-xsmall uk-section-muted">
    <div class="uk-container">
      <div class="uk-grid-match" uk-grid>
        <div class="uk-width-2-3@s">
          <div class="">
            <div class="" uk-slider>
              <div class="uk-position-relative">
                <div class="">
                  <div class="uk-slider-items uk-child-width-1-1">
                    <div class="">
                      <img alt="Product Image" height="436" src="/images/product.jpg" width="785">
                    </div>
                    <div class="">
                      <img alt="Product Image" height="436" src="/images/product.jpg" width="785">
                    </div>
                  </div>
                  <a class="uk-position-center-left max-sm:-mt-3 uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous
                     uk-slider-item="previous"></a>
                  <a class="uk-position-center-right max-sm:-mt-3 uk-position-small uk-hidden-hover" href="#" uk-slidenav-next
                     uk-slider-item="next"></a>
                </div>
                <div class="uk" uk-toggle="mode:media; media:@s;cls:uk-position-bottom-center uk-position-small">
                  <ul class="uk-thumbnav uk-flex-center mt-3">
                    <li class="uk-active" uk-slider-item="0">
                      <a href="#">
                        <img alt="Product Image" class="w-20 h-16" src="/images/product.jpg">
                      </a>
                    </li>
                    <li class="" uk-slider-item="1">
                      <a href="#">
                        <img alt="Product Image" class="w-20 h-16" src="/images/product.jpg">
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="uk-margin-small">
              <div class="flex justify-between gap-y-1 flex-wrap items-center">
                <h3 class="font-semibold max-sm:text-xl">Appartement 4 pieces en vente </h3>
                <h4 class="text-primary">400.000 CFA</h4>
              </div>
              <p class="text-sm">Abidjan ,marcory quartier divo</p>
            </div>
            <div class="uk-margin">
              <h3 class="font-medium">Detail</h3>
              <p class="text-sm text-justify my-1">(#PAR36) Démarrez votre nouvelle vie en beauté à Paris avec ce 2 pièces raffiné proposé par Blueground.
                Vous vous sentirez comme chez vous dans cet appartement meublé haut de gamme, entièrement équipé et
                aménagé, situé à Champs-Élysées. Avec Blueground, bénéficiez d'un service client 24/24 et 7/7 pour vous
                assister ! Un appartement conçu spécialement pour vous Conçu avec soin avec des finitions sur mesure,
                des meubles tendances et une cuisine entièrement équipée et aménagée, vous vous sentirez vraiment chez
                vous dans cet appartement Blueground. </p>
            </div>
            <div class="uk-margin">
              <h3 class="font-medium">Commodité</h3>
              <div class="uk-child-width-1-4@s uk-child-width-1-2 uk-margin-small uk-grid-small" uk-grid>
                <div class="" v-for="n in 8">
                  <label for="" >
                    <input class="uk-checkbox" type="checkbox">
                    Cour arrière
                  </label>
                </div>
              </div>
            </div>
            <div class="uk-margin">
              <h3 class="font-medium">Adresse</h3>
              <p class="text-sm">abidjan 220 logeement adjame</p>
              <div class="uk-margin uk-placeholder uk-background-secondary uk-light uk-flex uk-flex-center uk-flex-middle uk-height-medium">
                  <h3>Ici Google Map</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="uk-width-1-3@s">
          <div class="uk-panel">
            <div class="uk-card uk-card-default uk-card-small uk-card-body ">
              <div class="text-center">
                <h3 class="uk-card-title font-medium">Contacter l'annonceur</h3>
                <p>Veuillez nous laisser vos coordonnées sur lesquels vous souhaitez être rappelé.</p>
              </div>
              <div class="uk-margin">
                <FormKit type="form" :actions="false">
                  <FormKit type="number" label="Prix" placeholder="Prix" />
                  <FormKit type="textarea" label="Message" placeholder="Prix" />
                  <FormKit type="submit" label="Envoyez votre proposition" />
                  <FormKit type="submit" :classes="{input: 'btn-secondary'}" label="Envoyer votre demande" />
                </FormKit>
              </div>
            </div>
            <div class="uk-margin-large ">
              <img src="/images/pub.jpg" class="w-full" alt="Publicité">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
