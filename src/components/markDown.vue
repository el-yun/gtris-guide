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
          <template #body>
            <!-- .md 파일을 로드하여 Doc 파일 만드는 테스트 -->
            <!-- <component :is="dynamicComponent" v-if="dynamicComponent" /> -->
            <div v-html="$_markDownShow(test.basic)"> </div>
            <br>
            <div v-html="$_markDownShow(test.test)"></div>
            <br>
            <div v-html="$_markDownShow(test.float)" ></div>
          </template>
        </gt-panel>
      </div>
    </div>
  </section>
</template>

<script>
//import testMarkDown from "@/assets/mark.md";
const marked = require('marked');

export default {
  name: "markdown-guide",
  components: {
  //  testMarkDown    
  },
  data() {
    return {
      dynamicComponent: null,
      test:{basic:'' ,test:'' ,float:''}
    };
  },
  mounted() {
   
    // this.dynamicComponent = () =>
    //   import(`@/assets/${this.$route.name}.md`).catch(() => {
    //     return import("@/assets/mark.md");
    //   }).then(Response => {
    //     console.log(Response)
    //     console.log(this.dynamicComponent)
    //   })
    this.dynamicComponent = import(`@/assets/${this.$route.name}.md`).then((Response) => {
      //console.log(Response.default) 
      this.test = this.$_srDocsRun(Response.default)
      //console.log(this.test)
    })
      
  },
  methods: {
    $_markDownShow(txt){
      let returnTxt = ''
      if(txt.indexOf('--use-html--') !== -1  ){ 
        //! html tag 를 사용할 수 있게 해줌       
        returnTxt = txt.replace("--use-html--", "");
      }else{
        marked.setOptions({
          renderer: new marked.Renderer(),
          gfm: true,
          headerIds: false,
          tables: true,
          breaks: true,
          pedantic: false,
          sanitize: true,
          smartLists: true,
          smartypants: false
        });
        returnTxt = marked(txt);
      }
      

      //console.log(returnTxt)
      return returnTxt
    },

    $_onCollapseOpened(payload) {
      console.log("opened", payload);
    },
    $_onCollapseClosed(payload) {
      console.log("closed", payload);
    },
    $_srDocsRun(readme) {
      let matches = readme.match(/\<\!\-\-split.*?\-\-\>/g); // eslint-disable-line
      let splitedReadme = readme.split(/\<\!\-\-split.*?\-\-\>/); // eslint-disable-line
      let srDocs = [];
      splitedReadme = splitedReadme.filter(item => item.trim().length > 0);
      matches.map((match, index) => {
        let title = match.replace("<!--split:", "");
        title = title.replace("-->", "");
        srDocs[title.trim()] = `${splitedReadme[index]}`;
      });
      return srDocs
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

.ui-wrap {
  margin-bottom: 10px;
}

.gt-btn {
  margin: 10px 5px;
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
