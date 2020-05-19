<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'gtris',
  data() {
    return {};
  },
  created() {
    this.$_getMenu();
  },
  methods: {
    async $_getMenu() {
      await this.$store.dispatch('Map/SET_MAP');
      await this.$store.dispatch('Map/SET_TAG');
      //console.log(this.$store.getters[''])
      await console.log(
        this.$store.getters['Map/getComponentsMenu'],
        this.$store.getters['Map/getVersion'],
      );
    },
  },
};
