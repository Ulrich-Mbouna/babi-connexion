<template>
  <NuxtLayout name="links">
    <template #banner>
      <h2 class="text-white">Babi Connexion PDC</h2>
    </template>
    <div class="uk-container px-6 sm:px-20 uk-margin">
      <div class="">
        <h2 class="font-bold text-primary text-center">Nos Politiques De Confidentialité</h2>
        <div class="uk-margin">
          <p class="text-justify">
            Nous sommes engagés à protéger votre vie privée. Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons les informations personnelles que vous nous fournissez ou que nous recueillons lors de votre utilisation de nos services.
          </p>
          <div v-for="data in datas" :key="data.id" class="uk-margin">
            <h4 class="font-bold text-primary max-sm:text-lg">{{data.title}}</h4>
            <p class="uk-margin-small text-justify" v-for="(paragraph,index) in data.paragraphs" :key="index">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
definePageMeta({
  name: 'PolitiqueConfidentialité',
})

useHead({
  title: 'Politique de Confidentialité'
})

const datas = ref([
  {
    id: 1,
    title: "Collecte d'informations personnelles",
    paragraphs: [
      "Nous collectons les informations personnelles que vous nous fournissez directement, telles que votre nom, votre adresse e-mail, votre adresse postale et votre numéro de téléphone, lorsque vous utilisez nos services ou que vous nous contactez pour une demande de renseignements.\n" +
      "Utilisation des informations personnelles",
      "Nous utilisons les informations personnelles que nous collectons pour vous fournir nos services, pour communiquer avec vous concernant votre compte ou vos demandes, pour améliorer nos services et pour vous envoyer des informations marketing ou promotionnelles si vous avez donné votre consentement."
    ]
  },
  {
    id: 2,
    title: "Protection des informations personnelles",
    paragraphs: ["Nous prenons des mesures de sécurité techniques et organisationnelles pour protéger les informations personnelles que nous collectons contre la perte, le vol, l'utilisation abusive, l'accès non autorisé, la divulgation ou la destruction."]
  },
  {
    id: 3,
    title: "Partage d'informations personnelles",
    paragraphs: ["Nous ne vendons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager vos informations personnelles avec des fournisseurs de services tiers qui nous aident à fournir nos services, mais nous exigeons que ces fournisseurs de services respectent les mêmes normes de confidentialité que nous."]
  },
  {
    id: 4,
    title: "Cookies et technologies similaires",
    paragraphs: ["Nous utilisons des cookies et des technologies similaires pour collecter des informations sur votre utilisation de nos services. Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, mais cela peut affecter votre utilisation de nos services."]
  },
  {
    id: 5,
    title: "Vos droits",
    paragraphs: ["Vous avez le droit d'accéder, de rectifier et de supprimer vos informations personnelles. Vous pouvez également vous opposer au traitement de vos informations personnelles ou demander la limitation de ce traitement."]
  },
  {
    id: 6,
    title: "Modifications de la politique de confidentialité",
    paragraphs: ["Nous pouvons modifier cette politique de confidentialité à tout moment. Si des modifications importantes sont apportées, nous vous en informerons par e-mail ou par le biais de notre site Web."]
  },
  {
    id: 7,
    title: "Nous contacter",
    paragraphs: ["Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité ou notre traitement de vos informations personnelles, veuillez nous contacter à [insérer les coordonnées de l'entreprise]."]
  }
])
</script>
<style scoped>

</style>
