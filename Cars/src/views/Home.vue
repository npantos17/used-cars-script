<template>
  <div class="home">
    <Header subtitle="Home"/>
    <img src="../assets/icon.jpg" width="200" alt="Logo">
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>
