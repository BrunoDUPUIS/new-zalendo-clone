<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <main>
    <div class="container">
      <div></div>
      <div></div>
    </div>
  </main>
  <Footer />
</template>

<style scoped>
.container {
  display: flex;
  height: calc(
    100vh - var(--header-top-height) - var(--footer-height) - var(--header-bottom-height)
  );
  /* border: solid 3px red; */
}
.container > div {
  width: 50%;
  border: solid 2px green;
}
</style>
