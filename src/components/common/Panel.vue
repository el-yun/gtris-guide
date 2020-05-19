<template>
  <div class="gt-panel" :class="{'reverse': isLocatedDesc}">
    <p v-show="$slots.title" class="gt-panel-title"><slot name="title"/></p>
    <div class="gt-panel-body" :class="{'box': $slots.box}">
      <slot name="box" />
      <slot name="any" />
    </div>
  </div>
</template>

<script>
export default {
  name: "gt-panel",
  data() {
    return {
      isLocatedDesc: false
    }
  },
  mounted() {
    this.isLocatedDesc = this.$el.parentElement.className == 'row-desc';
  }
};
</script>

<style lang="scss" scoped>
.gt-panel {
  .gt-panel-title {
    font-size: 14px;
    color: #666;
    margin-bottom: 15px;
    &:before {
      display: inline-block;
      content: "#";
      margin-right: 5px;
    }
  }
  .gt-panel-body {
    &.box {
      padding: 20px 30px;
      border: solid 1px #e6e6e6;
    }
  }

  &.reverse {
    .gt-panel-title {
      color: #c4c4c4;
    }
    .gt-panel-body.box {
      border-color: #363636;
      padding: 0;
      position: relative;
      &:hover {
        border-color: #7e7e7e;
        .btn-copy {
          display: inline-flex;
        }
      }
    }
  }
}

</style>
