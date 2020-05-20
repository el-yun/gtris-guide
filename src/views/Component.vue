<template>
  <div class="wrap">
    <div class="sidenav"><SideNav /></div>
    <div class="docs-template">
      <router-view />
    </div>
  </div>
</template>

<script>
import SideNav from "../components/common/SideNav.vue";

export default {
  name: "components",
  components: {
    SideNav
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  background: #fff;
  height: 100vh;
  overflow: hidden;

  .sidenav {
    flex: 0 0 240px;
    height: 100%;
    overflow: auto;
    border-right: 1px solid #d8d8d8;
  }
  .docs-template {
    flex: 1 1 0;
    height: 100%;
    overflow: auto;
    background: linear-gradient(90deg, #fff $pane-ratio, $code-background 0);
  }
}
</style>
