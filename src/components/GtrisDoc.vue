<template>
  <div class="page">
    <header>
      <div>
        <h2>{{componentName}}</h2>
        <p class="page-desc">{{componentName}} user guide</p>
      </div>
      <div>
        <a href="/"></a>
        <button type="button" class="btn-reference"><i class="fas fa-drafting-compass"></i>Zeplin</button>
        <button type="button" class="btn-reference"><i class="fab fa-gitlab"></i>Gitlab</button>
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

            <component :is="row.component"/>

          </div>
          <div class="row-desc">
            <gt-panel>
              <template #title>{{row.menuName}}</template>
              <template #box>
                <prism-editor :code="row.sourceCode" :readonly="true" language="html"></prism-editor>
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
                <!-- <table class="group-table">
                  <colgroup>
                    <col style="width: 20%">
                    <col style="width: 20%">
                    <col style="width: 20%">
                    <col style="width: 40%">
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
                      <td>name</td>
                      <td>[String, Number]</td>
                      <td>true</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>customClass</td>
                      <td>String</td>
                      <td>false</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>width</td>
                      <td>String</td>
                      <td>false</td>
                      <td>default: 700px</td>
                    </tr>
                  </tbody>
                </table> -->
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

export default {
  name: "page",
  data() {
    return {
      discusName:'',
      componentName:'',
      dynamicComponent:'',
      propsTable:'',
      showMenu:[]
    };
  },
  mounted(){
    this.componentName = this.$route.name;
    this.discusName = this.$route.name.toLowerCase()    

    import(`@/assets/${this.$route.name}.txt`).then((Response) => {
      let doc_txt = this.$_srDocsRun(Response.default) 
      let menu = eval(doc_txt.basic)
      this.propsTable = doc_txt['props']
      
      menu.forEach(element => {
        element.sourceCode = doc_txt[`${element.componentName}:sourceCode`];
        element.component = () => import(`@/assets/${element.componentName}.md`)
      });

      this.showMenu = menu;
      console.log(this.showMenu)
    })
  },
  methods: {
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
      console.log(returnTxt)
      return returnTxt
    }        
  }
};
</script>
