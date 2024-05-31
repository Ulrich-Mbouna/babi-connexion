<template>
  <section class="uk-section uk-padding-remove-vertical uk-height-viewport">
    <div class="uk-child-width-1-2@s h-screen uk-grid-small" uk-grid>
      <div class="uk-panel">
        <div class="uk-container uk-flex uk-flex-center uk-flex-middle h-full">
          <div class="">
            <div class="uk-margin-medium text-center">
              <img alt="Baby connexion Logo" class="m-auto" src="/images/baby-connexion-logo.svg">
            </div>
            <div class="">
              <slot />
            </div>
          </div>
        </div>
      </div>
      <div class="uk-visible@s bg-center sm:max-lg:bg-right bg-cover"
           data-src="/images/register_image.jpg" uk-img></div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Auth'
}
</script>
