<template>
  <div>
    <gt-panel>
      <template #title>Basic</template>
      <template #box>
        <gt-toast v-model="toast_payload" />
        <div style="padding:10px;">
          <gt-button indicator="primary" @click="$_test({type:'primary', message:'hello world', direction: 'center-top' })" style="margin-right:10px;">테스트(상단 중앙)</gt-button>
          <gt-button indicator="secondary" @click="$_test({type:'warning', message:'hello world2', direction: 'left-bottom' })" style="margin-right:10px;" >테스트(하단 왼쪽)</gt-button>
          <gt-button indicator="danger" @click="$_test({type:'danger', message:'hello world3', direction: 'left-top' })" style="margin-right:10px;">테스트(상단 왼쪽)</gt-button>
        </div>
      </template>
    </gt-panel>    
  </div>
</template>

<script>
export default {
  name:'Toast_1',
  data() {
    return {
      toast_payload:{} 
    };
  },
  methods: {
    $_test(payload){
      this.toast_payload = payload
    }
  }

}
</script>

<style>

</style>