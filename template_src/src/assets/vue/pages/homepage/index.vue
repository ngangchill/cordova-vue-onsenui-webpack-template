<template src="./index.html">
  <div></div>
</template>

<script>
  var log = console.log
  export default {
    name: 'home-page',
    data() {
      return {}
    },
    methods: {
      goBack() {
        this.$router.back();
      }
    }
  }
</script>
