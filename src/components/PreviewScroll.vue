<template>
  <div
    id="content"
    style="height: 700px;background-color: #000;color:#FFF;width: 100%;margin: 0 auto;"
    v-pagination-infinite-scroll="doScroll"
    infinite-scroll-disabled="scrolling"
    infinite-scroll-distance="0"
  >
    <header>
      Pagination
    </header>
    <div class="body-components">Object Height: {{ height }}</div>
  </div>
</template>

<script>
export default {
  name: "component-scroll-preview",
  data() {
    return {
      scrolling: false,
      height: 0
    };
  },
  methods: {
    doScroll: function() {
      var self = this;
      var scrollHeight = 100;
      self.scrolling = true;
      setTimeout(function() {
        var app = document.querySelector("#content");
        var elHeight = app.clientHeight;
        app.style.height = elHeight + scrollHeight + "px";
        self.scrolling = false;
        self.height = app.style.height;
      }, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  header {
    font-weight: 400;
    color: #1f2f3d;
    font-size: 1.725rem;
    margin: 0;
  }
  .contents-header-desc {
    font-size: 0.875rem;
    color: #5e6d82;
    line-height: 24px;
    margin: 15px 0px;
  }
}
.gt-panel-table {
  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    td,
    th {
      padding: 5px;
      border: 1px solid #5e6d82;
    }
  }
}

.gt-btn {
  margin: 10px 5px;
}
</style>
