<template>
  <div id="app">
    <overlayLoading
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="true"
    ></overlayLoading>
    <router-view />
  </div>
</template>

<script>
// Import component
import overlayLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "gtris",
  data() {
    return {
      isLoading: false
    };
  },
  components: {
    overlayLoading
  },
  created() {
    this.$eventHub.$on("MENU_API_LOADED", this.$_menuloaded);
    this.isLoading = true;
  },
  beforeDestroy() {
    this.$eventHub.$off("MENU_API_LOADED");
  },
  methods: {
    $_menuloaded() {
      this.isLoading = false;
    }
  }
};
</script>
