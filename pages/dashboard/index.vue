<script setup lang="ts">

definePageMeta({
  name: 'Dashboard',
  middleware: 'auth',
  // auth: false,
  layout: 'authenticated',
})
useHead({
  title: 'Dashboard',
})

const {data,token, refreshToken} = useAuth()
</script>

<template>
<div class="">
  <div class="uk-grid uk-grid-divider uk-grid-medium uk-child-width-1-2 uk-child-width-1-4@l uk-child-width-1-5@xl" data-uk-grid>
    <div>
          <span class="uk-text-small">
            <span data-uk-icon="icon:users" class="uk-margin-small-right uk-text-primary"></span>
            New Users
          </span>
      <h1 class="uk-heading-primary uk-margin-remove  uk-text-primary">2.134</h1>
      <div class="uk-text-small">
        <span class="uk-text-success" data-uk-icon="icon: triangle-up">15%</span> more than last week.
      </div>
    </div>
    <div>

      <span class="uk-text-small"><span data-uk-icon="icon:social" class="uk-margin-small-right uk-text-primary"></span>Social Media</span>
      <h1 class="uk-heading-primary uk-margin-remove uk-text-primary">8.490</h1>
      <div class="uk-text-small">
        <span class="uk-text-warning" data-uk-icon="icon: triangle-down">-15%</span> less than last week.
      </div>

    </div>
    <div>

      <span class="uk-text-small"><span data-uk-icon="icon:clock" class="uk-margin-small-right uk-text-primary"></span>Traffic hours</span>
      <h1 class="uk-heading-primary uk-margin-remove uk-text-primary">12.00<small class="uk-text-small">PM</small></h1>
      <div class="uk-text-small">
        <span class="uk-text-success" data-uk-icon="icon: triangle-up"> 19%</span> more than last week.
      </div>

    </div>
    <div>
      <span class="uk-text-small"><span data-uk-icon="icon:search" class="uk-margin-small-right uk-text-primary"></span>Week Search</span>
      <h1 class="uk-heading-primary uk-margin-remove uk-text-primary">9.543</h1>
      <div class="uk-text-small">
        <span class="uk-text-danger" data-uk-icon="icon: triangle-down"> -23%</span> less than last week.
      </div>

    </div>
    <div class="uk-visible@xl">
      <span class="uk-text-small"><span data-uk-icon="icon:users" class="uk-margin-small-right uk-text-primary"></span>Lorem ipsum</span>
      <h1 class="uk-heading-primary uk-margin-remove uk-text-primary">5.284</h1>
      <div class="uk-text-small">
        <span class="uk-text-success" data-uk-icon="icon: triangle-up"> 7%</span> more than last week.
      </div>
    </div>
  </div>
  <hr>
  <div class="uk-grid uk-grid-medium" data-uk-grid uk-sortable="handle: .sortable-icon">
    <!-- panel -->
    <div class="uk-width-1-2@l">
      <div class="uk-card uk-card-default uk-card-small uk-card-hover">
        <div class="uk-card-header">
          <div class="uk-grid uk-grid-small">
            <div class="uk-width-auto"><h4>Sales Chart</h4></div>
            <div class="uk-width-expand uk-text-right panel-icons">
              <a href="#" class="uk-icon-link sortable-icon" title="Move" data-uk-tooltip data-uk-icon="icon: move"></a>
              <a href="#" class="uk-icon-link" title="Configuration" data-uk-tooltip data-uk-icon="icon: cog"></a>
              <a href="#" class="uk-icon-link" title="Close" data-uk-tooltip data-uk-icon="icon: close"></a>
            </div>
          </div>
        </div>
        <div class="uk-card-body">
          <div class="chart-container">
            <canvas id="chart2"></canvas>
          </div>
        </div>
      </div>
    </div>
    <!-- /panel -->
    <!-- panel -->
    <div class="uk-width-1-2@l">
      <div class="uk-card uk-card-default uk-card-small uk-card-hover">
        <div class="uk-card-header">
          <div class="uk-grid uk-grid-small">
            <div class="uk-width-auto"><h4>Predictions Chart</h4></div>
            <div class="uk-width-expand uk-text-right panel-icons">
              <a href="#" class="uk-icon-link sortable-icon" title="Move" data-uk-tooltip data-uk-icon="icon: move"></a>
              <a href="#" class="uk-icon-link" title="Configuration" data-uk-tooltip data-uk-icon="icon: cog"></a>
              <a href="#" class="uk-icon-link" title="Close" data-uk-tooltip data-uk-icon="icon: close"></a>
            </div>
          </div>
        </div>
        <div class="uk-card-body">
          <div class="chart-container">
            <canvas id="chart1"></canvas>
          </div>
        </div>
      </div>
    </div>
    <!-- /panel -->
    <!-- panel -->
    <div class="uk-width-1-1 uk-width-1-3@l uk-width-1-2@xl">
      <div class="uk-card uk-card-default uk-card-small uk-card-hover">
        <div class="uk-card-header">
          <div class="uk-grid uk-grid-small">
            <div class="uk-width-auto"><h4>Activity Chart</h4></div>
            <div class="uk-width-expand uk-text-right panel-icons">
              <a href="#" class="uk-icon-link sortable-icon" title="Move" data-uk-tooltip data-uk-icon="icon: move"></a>
              <a href="#" class="uk-icon-link" title="Configuration" data-uk-tooltip data-uk-icon="icon: cog"></a>
              <a href="#" class="uk-icon-link" title="Close" data-uk-tooltip data-uk-icon="icon: close"></a>
            </div>
          </div>
        </div>
        <div class="uk-card-body">
          <div class="chart-container">
            <canvas id="chart3"></canvas>
          </div>
        </div>
      </div>
    </div>
    <!-- /panel -->
    <!-- panel -->
    <div class="uk-width-1-2@s uk-width-1-3@l uk-width-1-4@xl">
      <div class="uk-card uk-card-default uk-card-small uk-card-hover">
        <div class="uk-card-header">
          <div class="uk-grid uk-grid-small">
            <div class="uk-width-auto"><h4>Distribution Chart</h4></div>
            <div class="uk-width-expand uk-text-right panel-icons">
              <a href="#" class="uk-icon-link sortable-icon" title="Move" data-uk-tooltip data-uk-icon="icon: move"></a>
              <a href="#" class="uk-icon-link" title="Configuration" data-uk-tooltip data-uk-icon="icon: cog"></a>
              <a href="#" class="uk-icon-link" title="Close" data-uk-tooltip data-uk-icon="icon: close"></a>
            </div>
          </div>
        </div>
        <div class="uk-card-body">
          <div class="chart-container">
            <canvas id="chart4"></canvas>
          </div>
        </div>
      </div>
    </div>
    <!-- /panel -->
    <!-- panel -->
    <div class="uk-width-1-2@s uk-width-1-3@l uk-width-1-4@xl">
      <div class="uk-card uk-card-default uk-card-small uk-card-hover">
        <div class="uk-card-header">
          <div class="uk-grid uk-grid-small">
            <div class="uk-width-auto"><h4>Population Chart</h4></div>
            <div class="uk-width-expand uk-text-right panel-icons">
              <a href="#" class="uk-icon-link sortable-icon" title="Move" data-uk-tooltip data-uk-icon="icon: move"></a>
              <a href="#" class="uk-icon-link" title="Configuration" data-uk-tooltip data-uk-icon="icon: cog"></a>
              <a href="#" class="uk-icon-link" title="Close" data-uk-tooltip data-uk-icon="icon: close"></a>
            </div>
          </div>
        </div>
        <div class="uk-card-body">
          <div class="chart-container">
            <canvas id="chart5"></canvas>
          </div>
        </div>
      </div>
    </div>
    <!-- /panel -->
  </div>
</div>
</template>

<style scoped>

</style>
