<script setup lang="ts">
import "~/assets/js/card.js";
import "~/assets/js/chartScript.js";

const {data:user, status} = useAuth()

const isLoggedIn = computed(() => status.value === 'authenticated')
</script>

<template>
  <!--HEADER-->
  <header id="top-head" class="uk-position-fixed">
    <div class="uk-container uk-container-expand bg-primary/80">
      <nav class="uk-navbar" data-uk-navbar="mode:click; duration: 250">
        <div class="uk-navbar-left">
          <div class="uk-navbar-item uk-hidden@m">
            <nuxt-link to="/" class="uk-logo" href="#">
              <img class="custom-logo" src="/images/baby-connexion-logo.svg" alt=""></nuxt-link>
          </div>
          <ul class="uk-navbar-nav uk-visible@m uk-hidden">
            <li><a href="#">Accounts</a></li>
            <li>
              <a href="#">Settings <span data-uk-icon="icon: triangle-down"></span></a>
              <div class="uk-navbar-dropdown">
                <ul class="uk-nav uk-navbar-dropdown-nav">
                  <li class="uk-nav-header">YOUR ACCOUNT</li>
                  <li><a href="#"><span data-uk-icon="icon: info"></span> Summary</a></li>
                  <li><a href="#"><span data-uk-icon="icon: refresh"></span> Edit</a></li>
                  <li><a href="#"><span data-uk-icon="icon: settings"></span> Configuration</a></li>
                  <li class="uk-nav-divider"></li>
                  <li><a href="#"><span data-uk-icon="icon: image"></span> Your Data</a></li>
                  <li class="uk-nav-divider"></li>
                  <li><a href="#"><span data-uk-icon="icon: sign-out"></span> Logout</a></li>
                </ul>
              </div>
            </li>
          </ul>
          <div class="uk-navbar-item uk-visible@s uk-hidden">
            <form action="" class="uk-search uk-search-default">
              <span data-uk-search-icon></span>
              <input class="uk-search-input search-field" type="search" placeholder="Search">
            </form>
          </div>
        </div>
        <div class="uk-navbar-right">
          <ul class="uk-navbar-nav [&_li_*]:text-white">
            <li><a href="#" data-uk-icon="icon:user" title="Your profile" data-uk-tooltip></a></li>
            <li><a href="#" data-uk-icon="icon: settings" title="Settings" data-uk-tooltip></a></li>
            <li><a href="#" data-uk-icon="icon:  sign-out" title="Sign Out" data-uk-tooltip></a></li>
            <li class="uk-hidden@s"><a class="uk-navbar-toggle" data-uk-toggle data-uk-navbar-toggle-icon href="#offcanvas-nav" title="Offcanvas" data-uk-tooltip></a></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
  <!--/HEADER-->
  <!-- LEFT BAR -->
  <aside id="left-col" class="uk-visible@m">
    <UserMenu />
  </aside>
  <!-- /LEFT BAR -->
  <!-- CONTENT -->
  <div id="content" data-uk-height-viewport="expand: true">
    <div class="uk-container uk-container-expand">
      <div class="">
        <slot />
      </div>
      <footer class="uk-section uk-section-small uk-text-center">
        <hr>
        <p class="uk-text-small uk-text-center">Copyright 2024 - Created by  <a class="text-primary" href="https://github.com/zzseba78/Kick-Off">Baby Connexion</a></p>
      </footer>
    </div>
  </div>
  <!-- /CONTENT -->
  <!-- OFFCANVAS -->
  <div id="offcanvas-nav" data-uk-offcanvas="flip: false; overlay: true">
    <div class="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-slide">
      <button class="uk-offcanvas-close uk-close uk-icon" type="button" data-uk-close></button>
      <UserMenu/>
    </div>
  </div>
  <!-- /OFFCANVAS -->
</template>
<style>
@import "assets/css/dashboard.css";
@import "assets/css/card.css";
</style>

