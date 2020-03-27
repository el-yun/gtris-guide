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
              <!-- <p class="nav-group__title"></p> -->
              <ul class="sub-nav">
                <li class="nav-item">
                  <router-link to="/component/collapse">Collapse</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/">(Badge)</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/">(Pagination)</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/">(Modal)</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/component/tooltip">Tooltip</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/">(Loading)</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/">(Alert/Toast)</router-link>
                </li>
              </ul>
            </div>
          </li>

          <li class="nav-item">
            <a>Form</a>
            <div class="nav-group">
              <!-- <p class="nav-group__title"></p> -->
              <ul class="sub-nav">
                <li class="nav-item">
                  <router-link to="/component/button">Button</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/">(Checkbox)</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/">(Radio)</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/">(Input/Textarea)</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/">(Dropdown/Select)</router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

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
      }
    }
  }
}
</style>
