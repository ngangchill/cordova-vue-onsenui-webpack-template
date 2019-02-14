<template>
	<v-ons-page>
    	<v-ons-splitter>
      		<v-ons-splitter-side swipeable collapse width="220px"
        	:animation="$ons.platform.isAndroid() ? 'overlay' : 'reveal'"
        	:open.sync="menuIsOpen">
        		<sidebar></sidebar>
      		</v-ons-splitter-side>

      	<v-ons-splitter-content>
        	<router-view></router-view>
      	</v-ons-splitter-content>
    	</v-ons-splitter>
  	</v-ons-page>
</template>

<script>
	import Sidebar from './assets/vue/partials/Sidebar'

	export default {
		name: 'app',
    components: {
      Sidebar
    },
    data() {
			return {}
		},
    computed: {
      menuIsOpen: {
        get() {
          return this.$store.getters['splitter/getOpen']
        },
        set(newValue) {
          this.$store.dispatch('splitter/toggle', newValue)
        },
      }
    }
  }
</script>

<style scoped>
</style>