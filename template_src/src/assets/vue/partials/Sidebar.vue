<template>
  <v-ons-page>
    <div class="side-page">
  		<v-ons-list>
  			<v-ons-list-item modifier="chevron" tappable>Menu 1</v-ons-list-item>
  			<v-ons-list-item modifier="chevron" tappable>Menu 2</v-ons-list-item>
  			<v-ons-list-item modifier="chevron" tappable>Menu 3</v-ons-list-item>
  			<v-ons-list-item modifier="chevron" tappable>Menu 4</v-ons-list-item>
  		</v-ons-list>
    </div>
  </v-ons-page>
</template>

<script>
	export default {
		data() {
			return {}
		}
	}
</script>

<style scoped>
  .side-page {
    height: 100%;
  }
  #item:hover{
    background-color: gray;
    color: white;
  }
</style>