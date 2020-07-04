<template>
  <div id="app">
    <Header />
    <router-view />
    <Loading v-if="isLoading" />
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Header
  },
  computed: mapGetters({
    isLoading: "getLoading"
  })
};
</script>
<style>
* {
  margin: 0;
  font-size: 0.12rem;
  padding: 0;
}
ul li {
  list-style: none;
}
img {
  display: block;
}
body {
  background-color: #ccc;
  padding: 0.06rem;
}
</style>
