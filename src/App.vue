<template>
  <div id="app">
    <div class="headerWrap">
      <header class="header-global">
        <h1 class="nav-logo"><a href="/">+ GTRIS V3</a></h1>
        <div id="nav" class="nav-bar">
          <!-- <router-link to="/">Home</router-link> | -->
          <router-link to="/" class="nav-bar-link">Guide</router-link> |
          <router-link to="/component" class="nav-bar-link">
            Component
          </router-link>
        </div>
      </header>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "gtris",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
.headerWrap {
  position: fixed;
  width: 100%;
  max-width: 1200px;
  z-index: 900;
  height: 80px;
  top: 0;
  background: #fff;
}

.header-global {
  @include clearfix();
  border-bottom: 1px solid #dcdfe6;
}
.nav-logo {
  float: left;
  padding: 10px;
  font-size: 2rem;
  /* @include mq("tablet") {
    font-size: 2rem;
  } */
}
.nav-bar {
  float: right;
  &-link {
    display: inline-block;
    padding: 0 10px;
    font-size: 1.125rem;
  }
}
#nav {
  padding: 20px 0;

  a {
    color: #2c3e50;

    &.router-link-active,
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#app {
  width: 1200px;
  margin: 0 auto;
}
</style>
