<template>
  <nav class="nav">
    <div class="top">
      <h1>GTRIS</h1>
      <div class="select-wrapper">
        <select class="version">
          <option value="">v1.0.0</option>
        </select>
      </div>
    </div>
    <div class="menu">
      <div class="menu-item"><router-link to="/"><i class="fal fa-book"></i>Guide</router-link></div>
      <div class="menu-item"><router-link to="/"><i class='gi gi-history'></i>Timeline</router-link></div>
      <div class="divider"></div>
      <div class="folder-name">Global</div>
      <div class="menu-item"><router-link to="/">Color System</router-link></div>
      <div class="folder-name">Components</div>
      <div class="menu-item"><router-link to="/">(Badge)</router-link></div>
      <div class="menu-item"><router-link to="/">Collapse</router-link></div>
      <div class="menu-item"><router-link to="/">(Loading)</router-link></div>
      <div class="menu-item"><router-link to="/">Modal</router-link></div>
      <div class="menu-item"><router-link to="/">Pagination</router-link></div>
      <div class="menu-item"><router-link to="/">Toast</router-link></div>
      <div class="menu-item"><router-link to="/">Tooltip</router-link></div>
      <div class="folder-name">Forms</div>
      <div class="menu-item"><router-link to="/">Button</router-link></div>
      <div class="menu-item"><router-link to="/">Input</router-link></div>
      <div class="menu-item"><router-link to="/">Checkbox</router-link></div>
      <div class="menu-item"><router-link to="/">Radio</router-link></div>
      <div class="menu-item"><router-link to="/">Dropdown</router-link></div>
      <div class="folder-name">Directive</div>
      <div class="menu-item"><router-link to="/">InfiniteScroll</router-link></div>
    </div>  
  </nav>
</template>

<script>
export default {
  name: "nav"
};
</script>

<style lang="scss" scoped>
$leftSpace: 40px;
$rightSpace: 30px;
.nav {
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px $rightSpace 20px $leftSpace;
    h1 {
      font-size: 30px;
      font-weight: normal; 
    }
    .select-wrapper {
      position: relative;
      vertical-align: middle;
      &:after {
        font-family: 'gi-icons';
        content: '\e954';
        font-size: 0.5em;
        height: 24px;
        line-height: 24px;
        position: absolute;
        top: 0px;
        right: 10px;
        color:  #909090;
        pointer-events: none;
      }
      select {
        background: #f6f6f6;
        border: 0;
        border-radius: 12px;
        min-width: 70px;
        height: 24px;
        font-size: 13px;
        padding: 0 9px;
        outline: 0;
        color: $body-text-color;
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        -o-appearance: none;
        appearance: none;
      }
      select::-ms-expand {
        display: none;
      }
    }
  }
  .divider {
    margin: 20px $rightSpace;
    height: 1px;
    background: #e6e6e6;
  }
  .folder-name {
    padding: 0 $rightSpace 0 $leftSpace;
    margin: 30px 0 10px;
    font-size: 12px;
    color: #909090;
  }
  .menu-item {
    > a {
      @include truncateFlexChild();
      display: flex;
      align-items: center;
      padding: 0 $rightSpace 0 $leftSpace;
      height: 36px;
      &:hover, &:focus {
        background-color: #eff4fc;
        color: #2985db;
      }
      > i {
        margin-right: 7px;
      }
    }
  }

}
</style>
