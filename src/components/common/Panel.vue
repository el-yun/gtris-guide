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
    <div class="gist">
      <p class="gt-panel-subtitle">example</p>
      <div class="gist-code">
        <div class="gist-data">
          <slot name="gist" />
        </div>
      </div>
    </div>
    <div class="options">
      <slot name="options" />
    </div>
    <div class="events">
      <slot name="events" />
    </div>
  </div>
</template>

<script>
export default {
  name: "gt-panel"
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";
</style>
