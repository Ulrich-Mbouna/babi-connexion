<template>
  <div class="" uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-slide-bottom-medium">
    <NuxtLayout name="links">
      <template #banner>
        <div uk-scrollspy-class>
          <h2 class="m-0 text-white">Babi Connexion Contact</h2>
        </div>
      </template>
      <div class="">
        <div class="uk-container uk-container-small">
          <div class="" uk-grid>
            <div class="uk-margin">
              <div class="items-end" uk-grid>
                <div class="uk-panel uk-width-3-5@s">
                  <div class="uk-margin">
                    <h3 class="font-medium uppercase uk-margin-small" uk-scrollspy-class>Envoyer un mail</h3>
                    <p uk-scrollspy-class>
                      Merci de votre intérêt pour Babiconneexion. Nous croyons en la créativité comme l'une des principales
                      forces du progrès. veuillez utiliser ce formulaire si vous avez des questions sur nos produits et nous
                      reviendrons très bientôt avec nous.
                    </p>
                  </div>
                  <FormKit type="form" uk-scrollspy-class>
                    <div class="grid sm:grid-cols-2 gap-4">
                      <FormKit label="Nom et Prénoms" name="name" placeholder="Nom et Prénoms" validation="required"/>
                      <FormKit label="Télephone" name="phone" placeholder="Numéro" validation="required"/>
                    </div>
                    <div class="grid sm:grid-cols-2 gap-4">
                      <FormKit label="Email" name="email" placeholder="Email" validation="email|required"/>
                      <FormKit label="Objet" name="objet" placeholder="Objet" validation="required"/>
                    </div>
                    <div class="">
                      <FormKit label="Message" name="message" placeholder="Entrer votre message" type="textarea"
                               validation="required"/>
                    </div>
                  </FormKit>
                </div>
                <div class="uk-panel uk-width-expand@s" uk-scrollspy-class>
                  <div class="uk-card uk-card-small uk-card-body uk-card-default bg-primary/10 shadow-md">
                    <ul class="uk-list uk-list-large">
                      <li>
                        <div class="uk-grid-small uk-flex-middle" uk-grid>
                          <div class="uk-width-auto">
                            <Icon class="text-primary" name="mdi:location-radius" size="2em"/>
                          </div>
                          <div class="uk-width-expand">
                            <h5 class="uppercase text-primary">Adresse</h5>
                            <p class="mt-1.5 text-sm">(734) 379-0036
                              13348 State Park
                              Allenton, Michigan(MI), 48002</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="uk-grid-small uk-flex-middle" uk-grid>
                          <div class="uk-width-auto">
                            <Icon class="text-primary" name="zondicons:phone" size="2em"/>
                          </div>
                          <div class="uk-width-expand">
                            <h5 class="uppercase text-primary ">Appelez-nous</h5>
                            <div class="mt-1.5 text-sm">
                              <p>+237 690 07 90 67 (Principal)</p>
                              <p> +237 690 07 90 67 / +237 68 57 52 14</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="uk-grid-small uk-flex-middle" uk-grid>
                          <div class="uk-width-auto">
                            <Icon class="text-primary" name="mdi:clock-outline" size="2em"/>
                          </div>
                          <div class="uk-width-expand">
                            <h5 class="uppercase text-primary ">Heure de travail</h5>
                            <div class="mt-1.5 text-sm">
                              <p>Lun - Ven: 08:00 - 17:00</p>
                              <p>Sam 09:00 - 15:00</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="uk-grid-small uk-flex-middle" uk-grid>
                          <div class="uk-width-auto">
                            <Icon class="text-primary" name="ic:outline-email" size="2em"/>
                          </div>
                          <div class="uk-width-expand">
                            <h5 class="uppercase text-primary ">Email</h5>
                            <p class="text-sm">contact@babiconnexion.ci</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <hr class="">
                    <div class="uk-child-width-1-2" uk-grid>
                      <div class="uk-panel text-center">
                        <h6 class="font-medium uppercase text-primary uk-margin-small">Réseaux sociaux</h6>
                        <div class="gap-0.5 flex justify-center">
                          <a class="uk-icon-button" href="" uk-icon="x"></a>
                          <a class="uk-icon-button" href="" uk-icon="linkedin"></a>
                          <a class="uk-icon-button" href="" uk-icon="facebook"></a>
                          <a class="uk-icon-button" href="" uk-icon="instagram"></a>
                        </div>
                      </div>
                      <div class="uk-panel text-center">
                        <h6 class="font-medium uppercase text-primary uk-margin-small">Messageries</h6>
                        <div class="gap-0.5 flex justify-center">
                          <a class="uk-icon-button" href="" uk-icon="telegram"></a>
                          <a class="uk-icon-button" href="" uk-icon="whatsapp"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <div class="uk-padding-large uk-placeholder text-center">
            <h2>Ici la Map</h2>
          </div>
        </div>
        <TheFooter />
      </div>
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
</script>
<style scoped>

</style>
