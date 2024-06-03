<template>
  <NuxtLayout name="links">
    <template #banner>
      <h2 class="text-white">Babi Connexion CGU</h2>
    </template>
    <div class="uk-container px-6 sm:px-20 uk-margin">
      <div class="">
        <h2 class="font-bold text-primary text-center">Nos Conditions Générales d'Utilisation</h2>
        <div class="uk-margin">
          <p class="text-justify">
            Les présentes conditions générales d'utilisation (les « Conditions ») régissent votre accès et votre
            utilisation du site Web [insérer le nom du site Web] et des services connexes (les « Services ») fournis par
            [insérer le nom de l'entreprise ou de l'individu fournissant les Services] (« Nous » ou « Notre »). En
            accédant ou en utilisant les Services, vous acceptez d'être lié par ces Conditions. Si vous n'acceptez pas
            ces Conditions, vous ne pouvez pas accéder ou utiliser les Services.
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
<script lang="ts" setup>
definePageMeta({
  name: 'ConditionGeneraleUtilisation',
})

useHead({
  title: "Condition Générale d'Utilisation"
})

const datas = ref([
  {
    id: 1,
    title: "Modification des conditions d'utilisation",
    paragraphs: ["Nous nous réservons le droit de modifier les présentes Conditions à tout moment. Toute modification prendra effet immédiatement dès qu'elle sera affichée sur le site Web. Vous êtes responsable de vérifier régulièrement les mises à jour de ces Conditions. Votre utilisation continue des Services après la publication de toute modification constitue votre acceptation de ces modifications."]
  },
  {
    id: 2,
    title: "Utilisation des services",
    paragraphs: ["Vous ne pouvez utiliser les Services que conformément aux présentes Conditions et à toutes les lois applicables, réglementations et règles locales, nationales et internationales. Vous acceptez de ne pas utiliser les Services à des fins illégales ou interdites par ces Conditions. Vous ne pouvez pas copier, reproduire, distribuer, vendre, louer, concéder une licence, modifier, décompiler, désassembler, ingénierie inverse ou créer des œuvres dérivées des Services, sauf dans les limites autorisées par la loi applicable."]
  },
  {
    id: 3,
    title: "Compte utilisateur",
    paragraphs: ["Pour utiliser certains des Services, vous devez créer un compte utilisateur. Vous êtes responsable de la confidentialité de votre nom d'utilisateur et de votre mot de passe et de toutes les activités qui se produisent sous votre compte. Vous acceptez de nous informer immédiatement de toute utilisation non autorisée de votre compte ou de toute autre violation de la sécurité. Nous ne serons pas responsables des pertes ou dommages résultant de l'utilisation non autorisée de votre compte."]
  },
  {
    id: 4,
    title: "Contenu utilisateur",
    paragraphs: ["Certains des Services permettent aux utilisateurs de soumettre, de télécharger ou de publier du contenu (le « Contenu utilisateur »). Vous conservez tous les droits de propriété intellectuelle que vous détenez sur votre Contenu utilisateur. En soumettant, téléchargeant ou publiant votre Contenu utilisateur, vous nous accordez une licence mondiale, non exclusive, libre de redevance, transférable et pouvant être sous-licenciée pour utiliser, reproduire, distribuer, préparer des œuvres dérivées, afficher et exécuter le Contenu utilisateur dans le cadre de la fourniture des Services."]
  }, {
    id: 5,
    title: "Indemnisation",
    paragraphs: ["Vous acceptez d'indemniser, de défendre et de dégager de toute responsabilité Nous et Nos dirigeants, administrateurs, employés et agents respectifs de toute réclamation, action, demande, responsabilité, coût et dépense, y compris les honoraires d'avocat raisonnables, résultant de votre violation de ces Conditions, de toute loi ou règlement applicable, ou de votre violation des droits de tout tiers."]
  }, {
    id: 6,
    title: "Limitation de responsabilité",
    paragraphs: ["Dans toute la mesure permise par la loi applicable, Nous ne serons pas responsables de tout dommage direct, indirect, accessoire, spécial, consécutif ou exemplaire résultant de votre accès ou utilisation des Services ou de tout contenu ou information obtenu à partir."]
  },
])
</script>
<style scoped>

</style>
