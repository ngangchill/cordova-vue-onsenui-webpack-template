<template>
  <v-ons-toolbar class="home-toolbar">
    
    <div class="left">
      <v-ons-toolbar-button @click="goBack" v-if="enableBack">
        <v-ons-icon icon="ion-arrow-left-c" style="color: teal;"></v-ons-icon>
      </v-ons-toolbar-button>
      
      <v-ons-toolbar-button @click="toggleMenu" v-if="!enableBack">
        <v-ons-icon icon="ion-navicon, material:md-menu" style="color: teal;"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>

    <div class="center">{{title}}</div>

    <slot name="nav-right"></slot>

  </v-ons-toolbar>
</template>

<script>
  export default {
    props: {
      enableBack: {
        type: Boolean,
        default: false,
      },
      title: {
        type: String,
        default: 'Default Title',
      },
    },
    methods: {
      toggleMenu() {
        this.$store.dispatch('splitter/toggle', true);
      },
      goBack() {
        this.$router.back();
      },
    },
  };
</script>

<style>
  ons-toolbar.home-toolbar.toolbar.toolbar--material {
    /*background: #263238; /* #3700B3;*/
    background: linear-gradient(to right, #263238 0%, rgb(1, 63, 63) 80%)
  }

  ons-toolbar > div.center.toolbar__center.toolbar__title.toolbar--material__center {
      color: whitesmoke;
  }

  ons-toolbar > div.right.toolbar__right.toolbar--material__right {
      color: whitesmoke;
  }
</style>
