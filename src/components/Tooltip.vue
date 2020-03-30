<template>
  <section>
    <header>
      Tooltip
    </header>
    <p class="contents-header-desc">Tooltip user guide</p>
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
        <div class="gt-panel-body">
          <table style="width: 500px;">
            <tr>
              <td>
                <gt-tooltip v-bind="{ position: 'bottom', message: 'gabia' }">
                  <p class="gt-btn green">bottom</p>
                </gt-tooltip>
              </td>
              <td>
                <gt-tooltip v-bind="{ position: 'left', message: 'frontend',type: 'warning' }" >
                  <span  class="gt-btn red">left</span>
                </gt-tooltip>
              </td>
              <td>
                <gt-tooltip v-bind="{ position: 'right', message: 'js', type: 'danger' }"  >
                  <button class="gt-btn blue">right</button>
                </gt-tooltip>
              </td>
              <td>
                <gt-tooltip v-bind="{ position: 'top', message: 'hiworks', type: 'info' }"  >
                  <div class="gt-btn yellow">top</div>
                </gt-tooltip>
              </td>
            </tr>
          </table>
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
  props: {
    type:{ type: String, default : 'primary'}, // 'primary' , 'warning' , 'danger' , 'info'
    position:{ type: String, default : 'bottom'},  // 'bottom' , 'left' , 'right' , 'top'
    message: { type: String, default : 'message' }  // messasge  
  }
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
<gt-tooltip v-bind="{ position: 'bottom', message: 'gabia' }">
  <!-- slot -->
  <p >bottom</p>
</gt-tooltip>

<gt-tooltip v-bind="{ position: 'left', message: 'frontend',type: 'warning' }" >  
  <span  >left</span>
</gt-tooltip>

<gt-tooltip v-bind="{ position: 'right', message: 'js', type: 'danger' }"  >
  <button >right</button>
</gt-tooltip>

<gt-tooltip v-bind="{ position: 'top', message: 'hiworks', type: 'info' }"  >
  <div >top</div>
</gt-tooltip>
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

.gt-btn {
  margin: 10px 5px;
  &.green{ background: green;  }
  &.yellow{ background: yellow;  }
  &.red{ background: red;  }
  &.blue{ background:blue;  }
}
</style>
