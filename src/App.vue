<template>
  <div id="app">
    <Breadcrumb />
    <router-view />
  </div>
</template>

<script>
import Breadcrumb from './components/Breadcrumb.vue'

export default {
  components: {
    Breadcrumb
  }
}
</script>
