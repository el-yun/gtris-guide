<template>
  <section>
    <header>
      Toast
    </header>
    <p class="contents-header-desc">Toast user guide (개선 필요)</p>
    <div class="body-components">
      <gt-toast v-model="toast_payload" />
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
          <gtbutton indicator="primary" @click="$_test({type:'primary', message:'hello world', direction: 'center-top' })">테스트(상단 중앙)</gtbutton>
          <gtbutton indicator="secondary" @click="$_test({type:'warning', message:'hello world2', direction: 'left-bottom' })" >테스트(하단 왼쪽)</gtbutton>
          <gtbutton indicator="danger" @click="$_test({type:'danger', message:'hello world3', direction: 'left-top' })">테스트(상단 왼쪽)</gtbutton>
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
      toast_payload:{} ,
      basic_btn_str: `
<gt-toast v-model="toast_payload" ></gt-toast>

-- script -- 
export default {
  name: "tooltip-test",
  data() {
    return {
      toast_payload:{} 
    }
  },
  methods: {
    $_test(){
      this.toast_payload = {type:'primary', message:'hello world', direction: 'center-top' }
    }
  }
}
-- script -- 
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
