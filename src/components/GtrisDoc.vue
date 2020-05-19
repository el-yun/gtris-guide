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
              <template #title>{{row.componentName}}</template>
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
                <table class="group-table">
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
                </table>
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

export default {
  name: "page",
  data() {
    return {
      discusName:'',
      componentName:'',
      dynamicComponent:'',
      showMenu:[],

      code_basic: `<gtbutton @click="$_openModal('basicModal')" indicator="primary">Open Modal</gtbutton>
      
<gt-modal name="basicModal">
  <template #head>제목없음</template>
  <template #body>
    청춘이 이름자를 시와 같이 피어나듯이 그러나 시인의 없이 있습니다. 새겨지는 풀이 애기 묻힌 우는 같이 까닭입니다. 덮어 그리워 묻힌 듯합니다. 아침이 이름자를 사람들의 별빛이 경, 내 파란 아무 있습니다. 하나에 풀이 패, 거외다. 하나에 내 않은 하나의 무엇인지 시인의 북간도에 이름과, 봅니다. 어머님, 하나에 헤일 까닭입니다. 그리워 나의 프랑시스 없이 나는 시와 있습니다. 남은 가난한 마리아 동경과 이제 까닭입니다. 별빛이 파란 이런 별에도 때 한 있습니다.<br>
    언덕 말 별들을 새겨지는 계십니다. 하나에 쉬이 사랑과 봅니다. 불러 패, 보고, 오면 속의 까닭입니다. 별이 다 이국 가슴속에 흙으로 한 북간도에 애기 있습니다. 쉬이 위에 내일 이름과, 듯합니다. 애기 이네들은 봄이 무성할 헤는 듯합니다. 하나에 남은 이름자를 청춘이 위에도 추억과 봅니다. 한 이름자 딴은 어머니 어머니, 있습니다. 못 그리고 애기 나는 이름과, 북간도에 같이 위에 내린 까닭입니다. 내린 가슴속에 이런 북간도에 이웃 별들을 듯합니다.
  </template>
  <template #foot>
    <gtbutton @click="$_closeModal('basicModal')" indicator="secondary">취소</gtbutton>
    <gtbutton @click="$_submit('basicModal', 'data')" indicator="primary">확인</gtbutton>
  </template>
</gt-modal>`,
      code_untitled: `<gtbutton @click="$_openModal('untitledModal')" indicator="primary">Open Modal</gtbutton>

<gt-modal name="untitledModal">
  <template #body>
    청춘이 이름자를 시와 같이 피어나듯이 그러나 시인의 없이 있습니다. 새겨지는 풀이 애기 묻힌 우는 같이 까닭입니다. 덮어 그리워 묻힌 듯합니다. 아침이 이름자를 사람들의 별빛이 경, 내 파란 아무 있습니다. 하나에 풀이 패, 거외다. 하나에 내 않은 하나의 무엇인지 시인의 북간도에 이름과, 봅니다. 어머님, 하나에 헤일 까닭입니다. 그리워 나의 프랑시스 없이 나는 시와 있습니다. 남은 가난한 마리아 동경과 이제 까닭입니다. 별빛이 파란 이런 별에도 때 한 있습니다.<br>
    언덕 말 별들을 새겨지는 계십니다. 하나에 쉬이 사랑과 봅니다. 불러 패, 보고, 오면 속의 까닭입니다. 별이 다 이국 가슴속에 흙으로 한 북간도에 애기 있습니다. 쉬이 위에 내일 이름과, 듯합니다. 애기 이네들은 봄이 무성할 헤는 듯합니다. 하나에 남은 이름자를 청춘이 위에도 추억과 봅니다. 한 이름자 딴은 어머니 어머니, 있습니다. 못 그리고 애기 나는 이름과, 북간도에 같이 위에 내린 까닭입니다. 내린 가슴속에 이런 북간도에 이웃 별들을 듯합니다.
  </template>
  <template #foot>
    <gtbutton @click="$_closeModal('untitledModal')" indicator="secondary">취소</gtbutton>
    <gtbutton @click="$_submit('untitledModal', 'data')" indicator="primary">확인</gtbutton>
  </template>
</gt-modal>`,
      code_nested: `<gtbutton @click="$_openModal('outerModal')" indicator="primary">Open Modal</gtbutton>
<!-- outer modal -->
<gt-modal name="outerModal">
  <template #head>제목없음</template>
  <template #body>
    청춘이 이름자를 시와 같이 피어나듯이 그러나 시인의 없이 있습니다. 새겨지는 풀이 애기 묻힌 우는 같이 까닭입니다. 덮어 그리워 묻힌 듯합니다. 아침이 이름자를 사람들의 별빛이 경, 내 파란 아무 있습니다. 하나에 풀이 패, 거외다. 하나에 내 않은 하나의 무엇인지 시인의 북간도에 이름과, 봅니다. 어머님, 하나에 헤일 까닭입니다. 그리워 나의 프랑시스 없이 나는 시와 있습니다. 남은 가난한 마리아 동경과 이제 까닭입니다. 별빛이 파란 이런 별에도 때 한 있습니다.<br>
    언덕 말 별들을 새겨지는 계십니다. 하나에 쉬이 사랑과 봅니다. 불러 패, 보고, 오면 속의 까닭입니다. 별이 다 이국 가슴속에 흙으로 한 북간도에 애기 있습니다. 쉬이 위에 내일 이름과, 듯합니다. 애기 이네들은 봄이 무성할 헤는 듯합니다. 하나에 남은 이름자를 청춘이 위에도 추억과 봅니다. 한 이름자 딴은 어머니 어머니, 있습니다. 못 그리고 애기 나는 이름과, 북간도에 같이 위에 내린 까닭입니다. 내린 가슴속에 이런 북간도에 이웃 별들을 듯합니다.
  </template>
  <template #foot>
    <gtbutton @click="$_closeModal('outerModal')" indicator="secondary">취소</gtbutton>
    <gtbutton @click="$_submit('outerModal', 'data')" indicator="primary">확인</gtbutton>
    <gtbutton @click="$_openModal('innerModal')" indicator="primary">Open innerModal</gtbutton>
  </template>
</gt-modal>
<!-- inner modal -->
<gt-modal name="innerModal">
  <template #head>nested modal</template>
  <template #body>
    못하다 만물은 살았으며, 물방아 그들의 때문이다. 끓는 같은 이것은 예가 커다란 교향악이다. 사랑의 인간에 그들에게 청춘 사람은 같은 인생을 구하기 말이다. 있음으로써 굳세게 아니더면, 것은 간에 그것을 황금시대의 것이다. 인간이 황금시대의 끝에 용기가 힘있다. 바이며, 보배를 놀이 너의 튼튼하며, 보는 말이다. 위하여서, 불어 방황하여도, 능히 그들은 소리다.이것은 있을 가치를 뿐이다. 피부가 실로 피가 자신과 붙잡아 천자만홍이 아니다. 끓는 끝에 되려니와, 품었기 속잎나고, 미묘한 뼈 영락과 봄바람이다. 곧 끝에 청춘의 때에, 이상 철환하였는가?
  </template>
  <template #foot>
    <gtbutton @click="$_closeModal('innerModal')" indicator="secondary">취소</gtbutton>
    <gtbutton @click="$_submit('innerModal', 'data')" indicator="primary">확인</gtbutton>
  </template>
</gt-modal>`
    };
  },
  mounted(){
    this.componentName = this.$route.name;
    this.discusName = this.$route.name.toLowerCase()    

    import(`@/assets/${this.$route.name}.txt`).then((Response) => {
      let doc_txt = this.$_srDocsRun(Response.default) 
      let menu = eval(doc_txt.basic)
      
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
    }    
  }
};
</script>
