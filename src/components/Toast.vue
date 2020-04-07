<template>
  <section>
    <header>
      Toast
      <p class="contents-header-desc">Toast user guide</p>
    </header>

    <div class="body-components">
      <h2 class="group-title">Usage</h2>
      <!-- Basic -->
      <div class="group">
        <gt-panel>
          <template #title>Basic</template>
          <template #body>
            <gt-toast v-model="toast_payload" />
            <div style="padding:10px;">
              <gtbutton indicator="primary" @click="$_test({type:'primary', message:'hello world', direction: 'center-top' })">테스트(상단 중앙)</gtbutton>
              <gtbutton indicator="secondary" @click="$_test({type:'warning', message:'hello world2', direction: 'left-bottom' })" >테스트(하단 왼쪽)</gtbutton>
              <gtbutton indicator="danger" @click="$_test({type:'danger', message:'hello world3', direction: 'left-top' })">테스트(상단 왼쪽)</gtbutton>
            </div>
          </template>
        </gt-panel>
        <prism-editor
          :lineNumbers="true"
          :code="code_basic"
          :readonly="true"
          language="html"
        ></prism-editor>
        <br>
        <p>script ( vue components example )</p>        
        <prism-editor
          :lineNumbers="true"
          :code="code_script"
          :readonly="true"
          language="javascript"
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
              <td>'primary','info','warning','danger'</td>
            </tr>
            <tr>
              <td>direction</td>
              <td>String</td>
              <td>'center-top'</td>
              <td>'right-top','left-top','right-bottom','left-bottom','center-top','center-bottom'</td>
            </tr>
            <tr>
              <td>message</td>
              <td>String</td>
              <td>''</td>
              <td>toast message</td>
            </tr>


          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "tooltip-test",
  data() {
    return {
      toast_payload:{} ,
      code_basic:`<gt-toast v-model="toast_payload" ></gt-toast>

<gtbutton indicator="primary" @click="$_test({type:'primary', message:'hello world', direction: 'center-top' })">
테스트(상단 중앙)
</gtbutton>
<gtbutton indicator="secondary" @click="$_test({type:'warning', message:'hello world2', direction: 'left-bottom' })" >
테스트(하단 왼쪽)
</gtbutton>
<gtbutton indicator="danger" @click="$_test({type:'danger', message:'hello world3', direction: 'left-top' })">
테스트(상단 왼쪽)
</gtbutton>
`,
      code_script:`
export default {
  name: "tooltip-test",
  data() {
    return {
      toast_payload:{} 
    }
  },
  methods: {
    $_test(payload){
      this.toast_payload = payload
    },
  }
}      
`

    };
  },
  methods: {
    $_test(payload){
      this.toast_payload = payload
    },
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
