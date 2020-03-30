<template>
  <section>
    <header>
      Tooltip
    </header>
    <p class="contents-header-desc">button user guide</p>
    <div class="body-components">
      <!-- preview Tooltip tag -->
      <p class="gt-panel-title">preview</p>
      <div class="gt-panel">
        <div class="gt-panel-header">
          <div class="circles">
            <span class="circle circle-red"></span>
            <span class="circle circle-yellow"></span>
            <span class="circle circle-green"></span>
          </div>
        </div>
        <div class="gt-panel-body" style="padding:10px;">

          <div class="ui-wrap">
            <gt-input placeholder="Basic usage" @pressEnter="$_pressEnter" @keyup="$_keyup" />
          </div>
          <div class="ui-wrap">
            <gt-input defaultValue="기본 값입니다." placeholder="Basic usage" />
          </div>
          <div class="ui-wrap">
            <gt-input size="sm" placeholder="small size" />
            <br><br>
            <gt-input placeholder="default size" />
            <br><br>
            <gt-input size="lg" placeholder="large size" />
          </div>
          <div class="ui-wrap">
            <gt-input custom-class="hiworks-input-custom-class" placeholder="Custom Class: !important를 붙여야 css가 적용됨^^;;" />
          </div>
          <div class="ui-wrap">
            <gt-input placeholder="width 값 조정" width="500px" />
          </div>
          <div class="ui-wrap">
            <gt-input placeholder="height 값 조정" height="100px" />
          </div>
          <div class="ui-wrap">
            <gt-input disabled placeholder="disabled" />
          </div>

        </div>
      </div>
      <div class="gist">
        <div class="gist-code">
          <div class="gist-data">
            <textarea :value="basic_btn_str" disabled style="height: 460px;" />
          </div>
        </div>
      </div>


      <!-- preview Tooltip props  -->
      <p class="gt-panel-title">props</p>
      <div class="gt-panel">
        <div class="gt-panel-header">
          <div class="circles">
            <span class="circle circle-red"></span>
            <span class="circle circle-yellow"></span>
            <span class="circle circle-green"></span>
          </div>
        </div>
        <div class="gt-panel-body">
          <pre>
  defaultValue: {type: String, required: false, default: ''},
  placeholder: {type: String, required: false, default: ''},
  size: {type: String, required: false, default: ''},
  customClass: { type: String, required: false, default: '' },
  width: { type: String, required: false, default: '' },
  height: { type: String, required: false, default: '' },
  autofocus: { type: Boolean, required: false, default: false },
          </pre>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "tooltip-test",
  data() {
    return {
      basic_btn_str: `
<div class="ui-wrap">
  <gt-input placeholder="Basic usage" @pressEnter="$_pressEnter" @keyup="$_keyup" />
</div>
<div class="ui-wrap">
  <gt-input defaultValue="기본 값입니다." placeholder="Basic usage" />
</div>
<div class="ui-wrap">
  <gt-input size="sm" placeholder="small size" />
  <br><br>
  <gt-input placeholder="default size" />
  <br><br>
  <gt-input size="lg" placeholder="large size" />
</div>
<div class="ui-wrap">
  <gt-input custom-class="hiworks-input-custom-class" placeholder="Custom Class: !important를 붙여야 css가 적용됨^^;;" />
</div>
<div class="ui-wrap">
  <gt-input placeholder="width 값 조정" width="500px" />
</div>
<div class="ui-wrap">
  <gt-input placeholder="height 값 조정" height="100px" />
</div>
<div class="ui-wrap">
  <gt-input disabled placeholder="disabled" />
</div>
`
    };
  },
  methods: {
    $_onCollapseOpened(payload) {
      console.log("opened", payload);
    },
    $_onCollapseClosed(payload) {
      console.log("closed", payload);
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

.ui-wrap{
  margin-bottom: 10px;
}

.gt-btn {
  margin: 10px 5px;
  &.green{ background: green;  }
  &.yellow{ background: yellow;  }
  &.red{ background: red;  }
  &.blue{ background:blue;  }
}
</style>
