<template>
  <section>
    <header>
      Pagination
    </header>
    <p class="contents-header-desc">
      Basic(Component) / infinite Scroll(Derective)
    </p>
    <div class="body-components">
      <!-- Basic -->
      <gt-panel>
        <template #title>Pagination(Basic)</template>
        <template #subtitle>
          JSON API 기준의 값을 사용하므로 게시물 갯수가 아닌 페이지 범위만 사용함
        </template>
        <template #body>
          <gtpagination :length="10" :last_page="40" v-model="page" />
          <p>현재 페이지: {{ page }}</p>
        </template>
        <template #gist>
          <prism-editor
            :lineNumbers="true"
            :code="basic_str"
            :readonly="true"
            language="html"
          ></prism-editor>
        </template>
        <template #options>
          <p class="">options</p>
          <div class="gt-panel-table">
            <table>
              <thead>
                <tr>
                  <th>이름(타입)</th>
                  <th>설명</th>
                  <th>기본값</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>length(Number)</td>
                  <td>노출할 페이지 번호 수</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>last_page(Number)</td>
                  <td>마지막 페이지 번호</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>
        <template #events>
          <p class="">event</p>
          <div class="gt-panel-table">
            <table>
              <thead>
                <tr>
                  <th>이벤트 이름</th>
                  <th>타입</th>
                  <th>설명</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>value(v-model)</td>
                  <td>Number</td>
                  <td>현재 페이지 번호</td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>
      </gt-panel>
      <!-- Basic // -->
    </div>
    <div class="body-components">
      <gt-panel>
        <template #title>Pagination(infinite-Scroll) [Derective]</template>
        <template #subtitle>
          Derective로 브라우저 세로길이(+ 스크롤 길이)보다 컨텐츠의 세로 길이가 작을 경우 이벤트가 발생함
        </template>
        <template #body>
          <a href="/component/pagination/preview">
            <gtbutton>예제보기(새창)</gtbutton>
          </a>
        </template>
        <template #gist>
          <prism-editor
            :lineNumbers="true"
            :code="scroll_str"
            :readonly="true"
            language="html"
          ></prism-editor>
        </template>
        <template #options>
          <p class="">options</p>
          <div class="gt-panel-table">
            <table>
              <thead>
                <tr>
                  <th>이름(타입)</th>
                  <th>설명</th>
                  <th>기본값</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>infinite-scroll-disabled(Boolean)</td>
                  <td>이벤트 지연 플래그 값</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>infinite-scroll-distance(Number)</td>
                  <td>이벤트가 발생하는 최소 스크롤 길이</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>
        <template #events>
          <p class="">event</p>
          <div class="gt-panel-table">
            <table>
              <thead>
                <tr>
                  <th>이벤트 이름</th>
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
        </template>
      </gt-panel>
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
