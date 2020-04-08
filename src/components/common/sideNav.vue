<template>
  <div class="component-contents">
    <div class="contents-wrap">
      <div class="side-nav">
        <ul>
          <li class="nav-item">
            <a>Global</a>
            <div class="nav-group">
              <!-- <p class="nav-group__title"></p> -->
              <ul class="sub-nav">
                <li class="nav-item">
                  <router-link to="/">(Color)</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/">(Scrollbar)</router-link>
                </li>
              </ul>
            </div>
          </li>

          <li class="nav-item">
            <a>Component</a>
            <div class="nav-group">
              <ul class="sub-nav">
                <li
                  class="nav-item"
                  v-for="item in componentMenu"
                  :key="item.name"
                >
                  <router-link
                    :to="item.link"
                    :class="{ current: $_getCurrnet(item.name) }"
                    >{{ item.name }}</router-link
                  >
                </li>
              </ul>
            </div>
          </li>

          <li class="nav-item">
            <a>Form</a>
            <div class="nav-group">
              <ul class="sub-nav">
                <li class="nav-item" v-for="item in formMenu" :key="item.name">
                  <router-link
                    :to="item.link"
                    :class="{ current: $_getCurrnet(item.name) }"
                    >{{ item.name }}</router-link
                  >
                </li>
              </ul>
            </div>
          </li>

          <li class="nav-item">
            <a>Derective</a>
            <div class="nav-group">
              <ul class="sub-nav">
                <li
                  class="nav-item"
                  v-for="item in derectiveMenu"
                  :key="item.name"
                >
                  <router-link
                    :to="item.link"
                    :class="{ current: $_getCurrnet(item.name) }"
                    >{{ item.name }}</router-link
                  >
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      componentMenu: [
        { name: "Collapse", link: "/component/collapse" },
        { name: "(Badge)", link: "/" },
        { name: "Pagination", link: "/component/pagination" },
        { name: "(Modal)", link: "/" },
        { name: "Tooltip", link: "/component/tooltip" },
        { name: "(Loading)", link: "/" },
        { name: "Toast", link: "/component/toast" }
      ],
      formMenu: [
        { name: "Button", link: "/component/button" },
        { name: "Input/Textarea", link: "/component/input" },
        { name: "(Checkbox)", link: "/" },
        { name: "(Radio)", link: "/" },
        { name: "(Dropdown/Select)", link: "/" }
      ],
      derectiveMenu: [
        { name: "InfiniteScroll", link: "/component/infinitescroll" }
      ]
    };
  },
  methods: {
    $_getCurrnet(name) {
      return this.$route.name == name ? true : false;
    }
  }
};
</script>

<style lang="scss" scoped>
.component-contents {
  width: 240px;
  position: fixed;
  top: 0;
  bottom: 0;
  margin-top: 70px;

  .contents-wrap {
    height: 100%;
    overflow-x: auto;
  }

  .side-nav {
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-right: 0;
    ul {
      padding-bottom: 50px;

      > .nav-item > a {
        font-size: 1rem;
        font-weight: 600;
        color: #333;
        line-height: 40px;
        height: 40px;
        margin: 0;
        padding: 0;
        text-decoration: none;
        display: block;
        position: relative;
      }
    }
    .sub-nav {
      padding: 0;
      margin: 0;
      overflow: hidden;
      > .nav-item > a {
        display: block;
        height: 40px;
        color: #666;
        line-height: 40px;
        font-size: 0.875rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: 400;

        &.current {
          font-weight: bold;
          color: #2f90d5;
        }
      }
    }
  }
}
</style>
