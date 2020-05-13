<template>
  <section>
    <header>
      markdown
      <p class="contents-header-desc">Input user guide</p>
    </header>

    <div class="body-components">
      <h2 class="group-title">Usage</h2>
      <!-- Basic -->
      <div class="group">
        <gt-panel>
          <template #title>Basic</template>
          <template #body >    
          <!-- .md 파일을 로드하여 Doc 파일 만드는 테스트 -->
          <testMarkDown/>

          </template>
        </gt-panel>       
      </div>
    </div>
  </section>
</template>

<script>
import testMarkDown from '@/assets/mark.md'

export default {
  name: "markdown-guide",
  components:{
    testMarkDown
  },
  data() {
    return {

    };
  },
  created(){

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

.hiworks-input-custom-class {
  border: 4px solid orangered !important;
}

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
