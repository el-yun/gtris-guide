<template>
  <section>
    <header>
      Infinite-Scroll Pagination
    </header>
    <div class="body-components">
      <!-- Basic -->
      <gt-panel>
        <template #title>Infinite-Scroll</template>
        <template #subtitle>
          Derective로 브라우저 세로길이(+ 스크롤 길이)보다 컨텐츠의 세로 길이가
          작을 경우 이벤트가 발생함
        </template>
        <template #body>
          <div
            id="content"
            style="height: 700px;background-color: #000;color:#FFF;width: 100%;margin: 0 auto;"
            v-pagination-infinite-scroll="doScroll"
            infinite-scroll-disabled="scrolling"
            infinite-scroll-distance="0"
          >
          <div class="body-components">Object Height: {{ height }}</div>
          </div>
        </template>
      </gt-panel>
      <!-- Basic // -->
    </div>
  </section>
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
