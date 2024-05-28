<script setup lang="ts">
import {useToast} from "maz-ui";

definePageMeta({
  layout: 'auth',
})
const toast = useToast()
const openNotif = () => {
  toast.success('Hello Le Bro')
}
</script>

<template>
<div class="">
  <h3>Merci de Vous connecter</h3>
  <button class="uk-button uk-button-default" @click="openNotif">Open</button>
</div>
</template>

<style scoped>

</style>
