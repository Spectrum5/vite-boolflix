<script>
import { store } from './store';
import AppMain from "./components/AppMain.vue"
import AppHeader from "./components/AppHeader.vue"
import AppFooter from "./components/AppFooter.vue"

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,

  },

  data() {
    return {
      store,
    }
  },
  
  methods: {
  }
}
</script>

<template>
  <div class="container">
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>
</template>

<style lang="scss">
@use "./styles/main.scss";
</style>