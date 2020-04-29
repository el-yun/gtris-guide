<template>
  <section>
    <header>
      Tooltip
      <p class="contents-header-desc">Tooltip user guide</p>
    </header>
    <div class="comments">
      <vue-disqus
        shortname="gtris3"
        identifier="tooltip"
        url="http://fe.gabia.com/gtris3/component/tooltip"
        title="Gtris Tooltip"
      ></vue-disqus>
    </div>

    <div class="body-components">
      <h2 class="group-title">Usage</h2>
      <!-- Basic -->
      <div class="group">
        <gt-panel>
          <template #title>Basic</template>
          <template #body>
            <gt-tooltip v-bind="{ position: 'bottom', message: 'gabia' }" style="margin-right:30px;" >
              <p class="gt-btn green">bottom</p>
            </gt-tooltip>

            <gt-tooltip v-bind="{ position: 'top', message: 'hiworks', type: 'info' }" style="margin-right:30px;"  >
              <div class="gt-btn yellow">top</div>
            </gt-tooltip> 

            <gt-tooltip v-bind="{ position: 'left', message: 'frontend',  type: 'warning' }" style="margin-right:30px;" >
              <span class="gt-btn red">left</span>
            </gt-tooltip>

            <gt-tooltip v-bind="{ position: 'right', message: 'js', type: 'danger' }" style="margin-right:30px;"  >
              <button class="gt-btn blue">right</button>
            </gt-tooltip> 

            <gt-tooltip v-bind="{ position: 'bottom', message: 'userStyle', type: 'info' , userStyle:{color:'red' , fontSize:'16px'} }" style="margin-right:30px;"  >
              <div class="gt-btn yellow">userStyle(color,fontSize)</div>
            </gt-tooltip>                              
          </template>
        </gt-panel>
        <prism-editor
          :lineNumbers="true"
          :code="code_basic"
          :readonly="true"
          language="html"
        ></prism-editor>
      </div>

      <h2 class="group-title">Props</h2>
      <!-- gt-collapse  -->
      <div class="group">        
        <table class="group-table">
          <colgroup>
            <col style="width: 20%" />
            <col style="width: 20%" />
            <col style="width: 20%" />
            <col style="width: 40%" />
          </colgroup>
          <thead>
            <tr>
              <th>OPTION</th>
              <th>TYPE</th>
              <th>DEFAULT</th>
              <th>DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>type</td>
              <td>String</td>
              <td>'primary'</td>
              <td>'primary' , 'warning' , 'danger' , 'info'</td>
            </tr>
            <tr>
              <td>position</td>
              <td>String</td>
              <td>'bottom'</td>
              <td>'bottom' , 'left' , 'right' , 'top'</td>
            </tr>
            <tr>
              <td>message</td>
              <td>String</td>
              <td>false</td>
              <td>-</td>
            </tr>
            <tr>
              <td>userStyle</td>
              <td>Object</td>
              <td>false</td>
              <td>ex> userStyle:{color:'red' , fontSize:'16px'}</td>
            </tr>            
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "tooltip-guide",
  data() {
    return {
      code_basic: `<gt-tooltip v-bind="{ position: 'bottom', message: 'gabia' }" >
  <p class="gt-btn green">bottom</p>
</gt-tooltip>

<gt-tooltip v-bind="{ position: 'top', message: 'hiworks', type: 'info' }"  >
  <div class="gt-btn yellow">top</div>
</gt-tooltip>

<gt-tooltip v-bind="{ position: 'left', message: 'frontend',  type: 'warning' }">
  <span class="gt-btn red">left</span>
</gt-tooltip>

<gt-tooltip v-bind="{ position: 'right', message: 'js', type: 'danger' }"  >
  <button class="gt-btn blue">right</button>
</gt-tooltip>

<gt-tooltip v-bind="{ position: 'bottom', message: 'userStyle', type: 'info' , userStyle:{color:'red' , fontSize:'16px'} }" style="margin-right:30px;"  >
  <div class="gt-btn yellow">bottom</div>
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
  margin:5px;
  &.green {
    background: green;
  }
  &.yellow {
    background: yellow;
  }
  &.red {
    background: red;
  }
  &.blue {
    background: blue;
  }
}
</style>
