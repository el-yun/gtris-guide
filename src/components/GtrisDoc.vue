<template>
  <div class="page" :class="{'hide-code': hide_code}">
    <header>
      <div>
        <h2>{{componentName}}</h2>
        <p class="page-desc">{{componentName}} user guide</p>
      </div>
      <div class="header-btns">
        <div>
          <a href="/"></a>
          <button type="button" class="btn-reference"><i class="fas fa-drafting-compass"></i>Zeplin</button>
          <button type="button" class="btn-reference"><i class="fab fa-gitlab"></i>Gitlab</button>
        </div>
        <button @click="$_toggle" type="button" class="btn-hide-code">
          <i v-if="hide_code" class="far fa-code"></i>
          <i v-else class="far fa-times"></i>
        </button>
      </div>
    </header>
    <div class="contents">
      <section class="group">
        <h3 class="group-title">Usage</h3>
        <div class="row">
          <div class="row-example">
            <div class="comments">
              <vue-disqus
                shortname="gtris3"
                :identifier="discusName"
                :url="`http://fe.gabia.com/gtris3/component/${discusName}`"
                title="Gtris Modal"
              ></vue-disqus>
            </div>
          </div>
          <div class="row-desc"></div>
        </div>
        <div class="row" v-for="row in showMenu" :key="row.componentName">
          <div class="row-example">
            <!-- <component :is="row.component"/> -->
            <component v-if="row.component !== undefined " :is="row.component" />
            <v-runtime-template v-else :template="row.sourceCode"  ></v-runtime-template>
          </div>
          <div class="row-desc">
            <gt-panel>
              <template #title>{{row.menuName}}</template>
              <template #box>
                <prism-editor :code="row.prismEditor" :readonly="true" language="html"></prism-editor>
                <button type="button" class="btn-copy"><i class='gis gi-new-window'></i></button>
              </template>
            </gt-panel>
          </div>
        </div>
      </section>

      <section class="group">
        <h3 class="group-title">Props</h3>
        <div class="row">
          <div class="row-example">
            <gt-panel>
              <template #any>
                <div class="group-table-div" v-html="$_markDownShow(propsTable)"> </div>                
              </template>
            </gt-panel>
          </div>
          <div class="row-desc"></div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
const marked = require('marked');
import axios from "axios";
import VRuntimeTemplate from "v-runtime-template";

export default {
  name: "page",
  data() {
    return {
      hide_code: false,
      page:1,
      prevName:'',
      discusName:'',
      componentName:'',
      dynamicComponent:'',
      propsTable:'',
      template: null,
      showMenu:[],
      exceptArr:['Toast_1']      
    };
  },
  watch:{
    $route:function(to){
      if(to.name != this.prevName)
        this.$_renderFnc()
    }
  },
  components: {
    VRuntimeTemplate
  },
  mounted(){
    this.$_renderFnc()
  },
  methods: {
    $_renderFnc(){          
      this.componentName = this.$route.name;
       this.discusName = this.$route.name.toLowerCase()    

      this.$_getReadme(readme => {
        console.log(readme)
        let doc_txt = this.$_srDocsRun(readme) 
        let menu = eval(doc_txt.basic)
        this.propsTable = doc_txt['props']
        console.log(menu)
        menu.forEach(element => {
          if(this.exceptArr.indexOf(element.componentName) !== -1 ){
            element.component  = () => import(`@/assets/gtris-markdown/${element.componentName}.vue`)
          }else{
            element.sourceCode = doc_txt[`${element.componentName}:sourceCode`];
          }           
          element.prismEditor = doc_txt[`${element.componentName}:prismEditor`];                  
        });
        this.showMenu = menu;
      });
    },
    $_getReadme(resolve, reject) {
      axios.get(
          `https://gitlab.gabia.com/api/v4/projects/1193/repository/files/src%2Fcomponents%2F${this.componentName}%2Freadme.md/raw?ref=master`,
          {
            headers: { "PRIVATE-TOKEN": "vcjF_MMcziRs2jRnzsGH" }
          }
        )
        .then(function(response) {
          resolve(response.data);
        })
        .catch(function() {
          console.log("FAILED");
          reject();
      });
    },    
    onCollapseOpend(payload) {
      alert(`opened: ${payload}`);
    },
    onCollapseClosed(payload) {
      alert(`closed: ${payload}`);
    },
    $_openModal(name) {
      this.$eventHub.$emit(`gt::opened::modal-${name}`, name); 
    },
    $_closeModal(name) {
      this.$eventHub.$emit(`gt::closed::modal-${name}`, name); 
    },
    $_submit(name, data = null) {
      window.alert(data);
      this.$_closeModal(name);
    },
    $_toggle() {
      this.hide_code = !this.hide_code;
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
    },
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
      return returnTxt
    }    
  }
};
</script>

<style lang="scss">
.hiworks-input-custom-class {
  border: 4px solid orangered !important;
}
</style>