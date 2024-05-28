<script setup lang="ts">
import type {FormKitNode} from "@formkit/core";

const userType = ref("")
const ComponentToRender = computed(() =>
    userType.value === 'particulier' ? resolveComponent('LazyParticulierRegister') : resolveComponent('LazyAgenceRegister')
)

// Function
const updateUserType = (value: string) => {
  userType.value = value
}
const handleSubmit = (data:UserRegister | UserRegisterAgent,node?: FormKitNode) => {

}
</script>

<template>
  <section class="uk-section uk-padding-remove-vertical uk-height-viewport">
    <div class="uk-child-width-1-2@s h-screen" uk-grid>
      <div class="uk-panel uk-width-2-3@s uk-width-1-2@m">
        <div class="uk-container uk-flex uk-flex-center uk-flex-middle h-full">
          <div class="">
            <div class="uk-margin-medium text-center">
              <img alt="Baby connexion Logo" class="m-auto" src="/images/baby-connexion-logo.svg">
            </div>
            <div class="text-center register-section">
              <h3 class="font-medium">Vous êtes ?</h3>
              <div class="uk-margin-medium-top">
                <button class="uk-button-primary uk-button w-full" uk-toggle="target:.register-section" type="button" @click="updateUserType('particulier')">
                  Un Particulier
                </button>
              </div>
              <h3 class="uk-heading-line uk-text-center m-2"><span>Ou</span></h3>
              <div class="">
                <button class="uk-button-primary uk-button w-full text-nowrap" type="button" uk-toggle="target:.register-section"
                        @click="updateUserType('agent')">Une Agence / Un Démarcheur
                </button>
              </div>
            </div>
            <div class="register-section " hidden>
              <component :is="ComponentToRender"/>
              <a v-if="userType !== 'particulier'" href="#" uk-toggle="target:.register-section" class="flex items-center group text-primary">
                <span uk-icon="arrow-left" class="group-hover:-translate-x-1 transition-all duration-500 align-middle"></span>
                <span >Back</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="uk-visible@s bg-center sm:max-lg:bg-right bg-cover uk-width-expand@s" data-src="/images/register_image.jpg" uk-img></div>
    </div>
  </section>
</template>

<style scoped>

</style>
