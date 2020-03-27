<template>
  <section>
    <header>
      Tooltip
    </header>
    <p class="contents-header-desc">Collapse user guide</p>
    <div class="body-components">
      <!-- preview collapse tag -->
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
                  <p style="background: red; padding:5px 10px;">bottom</p>
                </gt-tooltip>
              </td>
              <td>
                <gt-tooltip
                  v-bind="{
                    position: 'left',
                    message: 'frontend',
                    type: 'warning'
                  }"
                >
                  <p style="background: blue; padding:5px 10px;">left</p>
                </gt-tooltip>
              </td>
              <td>
                <gt-tooltip
                  v-bind="{ position: 'right', message: 'js', type: 'danger' }"
                >
                  <p style="background: yellow; padding:5px 10px;">right</p>
                </gt-tooltip>
              </td>
              <td>
                <gt-tooltip
                  v-bind="{ position: 'top', message: 'hiworks', type: 'info' }"
                >
                  <p style="background: green; padding:5px 10px;">top</p>
                </gt-tooltip>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="gist">
        <div class="gist-code">
          <div class="gist-data">
            <textarea :value="basic_btn_str" disabled style="height: 100px;" />
          </div>
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
      basic_btn_str: `<gt-tooltip  v-bind="{position:'left' , message:'frontend' , type:'warning'}" >
    <p style="background: blue; padding:5px 10px;">left</p> <!-- slot --> 
</gt-tooltip>`
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
}
</style>
