<template>
  <section>
    <header>
      Infinite-Scroll Pagination
    </header>

    <div class="comments">
      <vue-disqus
        shortname="gtris3"
        identifier="infinitescroll"
        url="http://fe.gabia.com/gtris3/component/infinitescroll"
        title="Gtris Infinite Scroll"
      ></vue-disqus>
    </div>

    <div class="body-components">
      <!-- Basic -->
      <gt-panel>
        <template #title>Infinite-Scroll</template>
        <template #subtitle>
          Derective로 브라우저 세로길이(+ 스크롤 길이)보다 컨텐츠의 세로 길이가
          작을 경우 이벤트가 발생함
        </template>
        <template #body>
          <a href="/gtris3/component/infinitescrollpreview">
            <gtbutton>예제보기(새창)</gtbutton>
          </a>
        </template>
      </gt-panel>
      <!-- Basic // -->
    </div>

    <h2 class="group-title">Options</h2>
    <div class="group">
      <p class="group-sub-title">v-pagination-infinite-scroll</p>
      <table class="group-table">
        <colgroup>
          <col style="width: 20%" />
          <col style="width: 20%" />
          <col style="width: 20%" />
          <col style="width: 40%" />
        </colgroup>
        <thead>
          <tr>
            <th>이름</th>
            <th>타입</th>
            <th>기본값</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>infinite-scroll-disabled</td>
            <td>Boolean</td>
            <td>false</td>
            <td>이벤트 지연 플래그 값</td>
          </tr>
          <tr>
            <td>infinite-scroll-distance</td>
            <td>Number</td>
            <td>10</td>
            <td>이벤트가 발생하는 최소 스크롤 길이</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="group-title">Event</h2>
    <div class="group">
      <p class="group-sub-title">v-pagination-infinite-scroll</p>
      <table class="group-table">
        <colgroup>
          <col style="width: 40%" />
          <col style="width: 50%" />
        </colgroup>
        <thead>
          <tr>
            <th>이름</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>pagination-infinite-scroll</td>
            <td>페이징이 확장될 경우 이벤트 발생</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: "component-pagination",
  data() {
    return {
      basic_str: `<gtpagination :length="10" :last_page="40" v-model="page" />`,
      scroll_str: `
        <template>
          <div
            id="app_box"
            style="height: 200px;background-color: #000;color:#FFF;width: 100%;margin: 0 auto;"
            v-pagination-infinite-scroll="doScroll"
            infinite-scroll-disabled="scrolling"
            infinite-scroll-distance="10"
          >
          <!-- Contents -->
          </div>
        </template>
        <script>
        export default {
          methods: {
            doScroll: function() {
              var self = this;
              var scrollHeight = 100;
              self.scrolling = true;
              setTimeout(function () {
                var app = document.querySelector('#app_box');
                var elHeight = app.clientHeight;
                app.style.height = elHeight + scrollHeight + 'px';
                self.scrolling = false
                self.height = app.style.height
              }, 2000)
            }
          }
        }
      `,
      length: 10,
      currentPage: 1,
      lastPage: 20,
      scrolling: false,
      height: 300,
      page: 1
    };
  },
  methods: {
    doScroll: function() {
      var self = this;
      var scrollHeight = 100;
      self.scrolling = true;
      setTimeout(function() {
        var app = document.querySelector("#app_box");
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
