<template>
  <div class="uk-card uk-card-small uk-card-default rounded-md ">
    <div class="uk-card-media-top rounded-t-md">
      <img alt="" class="rounded-t-md" height="408" src="/images/card-image.jpeg" width="610">
    </div>
    <div class="uk-card-body p-3 px-2">
      <div class="uk-card-badge uk-label">à louer</div>
      <div class="uk-child-width-1-2 uk-flex-middle uk-flex-between" uk-grid>
        <div class="">
          <h4 class="uk-card-title  text-lg">Appartement</h4>
          <p class="flex m-0 text-xs items-center">
            <Icon name="carbon:location" />
            <span>Abidjan/Marcory</span>
          </p>
        </div>
        <div class="text-right">
          <h5 class="m-0 text-primary">500 000 fcfa</h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card'
}
</script>
