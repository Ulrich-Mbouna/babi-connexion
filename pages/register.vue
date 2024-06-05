<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: 'auth',
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/dashboard',
  }
})

const userType = ref("")
const ComponentToRender = computed(() =>
    userType.value === 'particulier' ? resolveComponent('LazyParticulierRegister') : resolveComponent('LazyAgenceRegister')
)

// Function
const updateUserType = (value: string) => {
  userType.value = value
}

</script>

<template>
  <div class="">
    <div class="text-center register-section">
      <h3 class="font-medium">Vous êtes ?</h3>
      <div class="uk-margin-medium-top">
        <button class="uk-button-primary uk-button w-full" uk-toggle="target:.register-section" type="button"
                @click="updateUserType('particulier')">
          Un Particulier
        </button>
      </div>
      <h3 class="uk-heading-line uk-text-center m-2"><span>Ou</span></h3>
      <div class="">
        <button class="uk-button-primary uk-button w-full text-nowrap" type="button"
                uk-toggle="target:.register-section"
                @click="updateUserType('agent')">Une Agence / Un Démarcheur
        </button>
      </div>
    </div>
    <div class="register-section " hidden>
      <component :is="ComponentToRender"/>
      <a v-if="userType !== 'particulier'" href="#" uk-toggle="target:.register-section"
         class="flex items-center group text-primary">
                <span uk-icon="arrow-left"
                      class="group-hover:-translate-x-1 transition-all duration-500 align-middle"></span>
        <span>Back</span>
      </a>
    </div>
  </div>
</template>

