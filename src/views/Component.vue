<template>
  <div class="components">
    <div class="components-page-scroll">
      <sideNav />
      <div class="page">
        <router-view class="page-contents" />
      </div>
    </div>
  </div>
</template>

<script>
import sideNav from "../components/common/sideNav.vue";

export default {
  name: "components",
  components: {
    sideNav
  }
};
</script>

<style lang="scss" scoped>
.components {
  background: #fff;

  .components-page-scroll {
    height: calc(100% - 80px);
    margin-top: 80px;
    overflow: hidden;
    position: relative;
  }

  .page {
    padding-left: 270px;
    padding-bottom: 100px;
    box-sizing: border-box;

    .page-contents {
      padding-top: 50px;
    }
  }
}
</style>
