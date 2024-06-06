<template>
  <ul class="uk-pagination uk-flex-stretch uk-flex-right@s uk-flex-center *:border [&_li.uk-active_*]:bg-primary [&_li.uk-active_*]:text-white [&_li_a]:h-full">
    <li class="uk-visible@s"><a href="">Précedent</a></li>
    <li class="uk-hidden@s"><a href=""><span uk-pagination-previous=""></span></a></li>
    <li class=""><a>1</a></li>
    <li class=""><a href="">2</a></li>
    <li class=""><a href="">3</a></li>
    <li class="uk-active"><span href="">4</span></li>
    <li class=""><a href="">5</a></li>
    <li class=""><a href="">6</a></li>
    <li class="uk-visible@s"><a href="">Suivant</a></li>
    <li class="uk-hidden@s"><a href=""><span uk-pagination-next=""></span></a></li>
  </ul>
</template>
<script setup>
defineOptions({
  name: 'Pagination'
})
</script>
