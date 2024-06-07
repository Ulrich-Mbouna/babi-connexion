<template>
  <div class="">
    <div class="uk-tile uk-tile-default text-center">
      <h3 class="font-semibold">Mon solde</h3>
      <p class="text-xl">0 CFA</p>
    </div>
    <hr />
    <div class="uk-margin">
      <div class="flex justify-between items-center flex-wrap gap-y-3">
        <h3 class="font-semibold">Historique de paiement</h3>
        <button class="uk-button uk-button-primary uk-button-small rounded-md">Recharger</button>
      </div>
     <div class="uk-margin">
       <DataTable :data="data" :columns="columns" />
     </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import DataTable from "~/components/payments/data-table.vue";
import {columns} from "~/components/payments/columns";

defineOptions({
  name: "Paiements",
})
definePageMeta({
  layout: 'authenticated',
  // middleware: 'auth',
})

useHead({
  title: 'Paiements',
})

const data = ref<Payment[]>([])

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here
  const original =  [
    {
      id: 'm5gr84i9',
      montant: 319581,
      status: 'success',
      name: 'Arlene McCoy',
      type: 'admin',
      image: 'https://i.pravatar.cc/150?img=1',
      paiement_date: Date.now()
    },
    {
      id: '3u1reuv4',
      montant: 249581,
      status: 'success',
      name: 'Cody Fisher',
      type: 'admin',
      image: 'https://i.pravatar.cc/150?img=2',
      paiement_date: Date.now()
    },
    {
      id: 'derv1ws0',
      montant: 839581,
      status: 'processing',
      name: 'Esther Howard',
      type: 'admin',
      image: 'https://i.pravatar.cc/150?img=3',
      paiement_date: Date.now()
    },
    {
      id: '5kma53ae',
      montant: 879581,
      status: 'success',
      name: 'Ronald Richards',
      type: 'admin',
      image: 'https://i.pravatar.cc/150?img=4',
      paiement_date: Date.now()
    },
    {
      id: 'bhqecj4p',
      montant: 729581,
      status: 'failed',
      name: 'Paul Weggener',
      type: 'admin',
      image: 'https://i.pravatar.cc/150?img=5',
      paiement_date: Date.now()
    },
  ]

  const extendedData = [...original]

  for(let i = original.length - 1; i < 100; i++) {
    extendedData.push(generateRandomData())
  }

  return extendedData
}

const  generateRandomData = () => {
  return {
    id: Math.random().toString(36).substring(2, 15),
    montant: Math.floor(Math.random() * 1000000), // Random montant between 0 and 1 million
    status: Math.random() > 0.5 ? 'success' : (Math.random() > 0.25 ? 'failed' : 'processing'), // Random status with probabilities
    name: Math.random().toString(36).substring(2, 10) + ' ' + Math.random().toString(36).substring(2, 10), // Random name
    type: 'admin',
    image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 100)}`, // Random image number
    paiement_date: Date.now(),
  };
}

onMounted(async () => {
  data.value = await getData()
})
</script>
<style scoped>

</style>
