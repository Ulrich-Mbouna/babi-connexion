<template>
  <section class="uk-section uk-padding-remove-vertical uk-height-viewport">
    <div class="uk-child-width-1-2@s h-screen" uk-grid>
      <div class="uk-panel uk-width-1-2@s uk-width-1-2@m">
        <div class="uk-container uk-flex uk-flex-center uk-flex-middle h-full">
          <div class="uk-width-large">
            <div class="uk-margin-medium text-center">
              <img alt="Baby connexion Logo" class="m-auto" src="/images/baby-connexion-logo.svg">
            </div>
            <div class="">
              <slot />
            </div>
          </div>
        </div>
      </div>
      <div class="uk-visible@s bg-center sm:max-lg:bg-right bg-cover uk-width-expand@s"
           data-src="/images/register_image.jpg" uk-img></div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Auth'
}
</script>
