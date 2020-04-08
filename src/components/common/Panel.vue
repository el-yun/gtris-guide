<template>
  <div>
    <p class="gt-panel-title"><slot name="title" /></p>
    <p class="gt-panel-subtitle"><slot name="subtitle" /></p>
    <div class="gt-panel">
      <div class="gt-panel-header">
        <div class="circles">
          <span class="circle circle-red"></span>
          <span class="circle circle-yellow"></span>
          <span class="circle circle-green"></span>
        </div>
      </div>
      <div class="gt-panel-body">
        <slot name="body" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gt-panel"
};
</script>

<style lang="scss" scoped>
.gt-panel {
  margin: 30px 0 20px;
  border-radius: 3px;
  border: 1px solid #e7e7e7;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);

  .gt-panel-header {
    height: 38px;
    padding: 0;
    border-top: 1px solid #eaeae9;
    border-bottom: 1px solid #dfdfde;
    background: #ebebeb;

    .circles {
      margin: 4px 10px;
      .circle {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #fff;
        border: 1px solid #fff;
        margin-right: 5px;
        &.circle-red {
          background-color: #fc615c;
          border-color: #fd504a;
        }
        &.circle-yellow {
          background-color: #fec041;
          border-color: #f0b542;
        }
        &.circle-green {
          background-color: #33c849;
          border-color: #1bc634;
        }
      }
    }
  }
}

.gt-panel-title {
  font-size: 20px;
  margin-top: 50px;
  &:before {
    display: inline-block;
    content: "#";
    color: #999;
    margin-right: 5px;
    font-weight: lighter;
  }
}

.gt-panel-subtitle {
  padding-left: 16px;
  color: #666;
}
</style>
