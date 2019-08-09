<template>
  <b-container>
    <Header />
    <nuxt />
  </b-container>
</template>

<style>
  body{
    background-color:#282828;
  }
</style>

<script>
import Header from "@/components/Navigation/Header";
export default {
  // middleware: 'log',
  components: {
    Header
  }
};

</script>