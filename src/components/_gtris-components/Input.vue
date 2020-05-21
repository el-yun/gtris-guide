<template>
  <section>
    <header>
      Input
      <p class="contents-header-desc">Input user guide</p>
    </header>

    <div class="comments">
      <vue-disqus
        shortname="gtris3"
        identifier="input"
        url="http://fe.gabia.com/gtris3/component/input"
        title="Gtris Input"
      ></vue-disqus>
    </div>

    <div class="body-components">
      <h2 class="group-title">Usage</h2>
      <!-- Basic -->
      <div class="group">
        <gt-panel>
          <template #title>Basic</template>
          <template #body>
            <div style="padding:10px;">
              <div class="ui-wrap">
                <gt-input placeholder="Basic usage" @pressEnter="$_pressEnter" @keyup="$_keyup" />
              </div>
              <div class="ui-wrap">
                <gt-input defaultValue="기본 값입니다." placeholder="Basic usage" />
              </div>
              <div class="ui-wrap">
                <gt-input size="sm" placeholder="small size" />
                <br><br>
                <gt-input placeholder="default size" />
                <br><br>
                <gt-input size="lg" placeholder="large size" />
              </div>
              <div class="ui-wrap">
                <gt-input custom-class="hiworks-input-custom-class" placeholder="Custom Class:!important 필요" />
              </div>
              <div class="ui-wrap">
                <gt-input placeholder="width 값 조정" width="500px" />
              </div>
              <div class="ui-wrap">
                <gt-input placeholder="height 값 조정" height="100px" />
              </div>
              <div class="ui-wrap">
                <gt-input disabled placeholder="disabled" />
              </div>
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
        <p>css</p>        
        <prism-editor
          :lineNumbers="true"
          :code="code_basic_css"
          :readonly="true"
          language="css"
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
              <td>defaultValue</td>
              <td>String</td>
              <td>''</td>
              <td>required : false</td>
            </tr>
            <tr>
              <td>defaultValue</td>
              <td>String</td>
              <td>''</td>
              <td>required : false</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>String</td>
              <td>''</td>
              <td>required : false</td>
            </tr>
            <tr>
              <td>size</td>
              <td>String</td>
              <td>''</td>
              <td>required : false</td>
            </tr>                        
            <tr>
              <td>customClass</td>
              <td>String</td>
              <td>''</td>
              <td>required : false</td>
            </tr>  

            <tr>
              <td>height</td>
              <td>String</td>
              <td>''</td>
              <td>required : false</td>
            </tr>  

            <tr>
              <td>width</td>
              <td>String</td>
              <td>''</td>
              <td>required : false</td>
            </tr>              


            <!-- <tr> 
              <td>autofocus</td>
              <td>Boolean</td>
              <td>''</td>
              <td>required : false</td>
            </tr>   -->

          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "input-guide",
  data() {
    return {
      code_basic: `<div class="ui-wrap">
  <gt-input placeholder="Basic usage" @pressEnter="$_pressEnter" @keyup="$_keyup" />
</div>
<div class="ui-wrap">
  <gt-input defaultValue="기본 값입니다." placeholder="Basic usage" />
</div>
<div class="ui-wrap">
  <gt-input size="sm" placeholder="small size" />
  <br><br>
  <gt-input placeholder="default size" />
  <br><br>
  <gt-input size="lg" placeholder="large size" />
</div>
<div class="ui-wrap">
  <gt-input custom-class="hiworks-input-custom-class" placeholder="Custom Class:!important 필요" />
</div>
<div class="ui-wrap">
  <gt-input placeholder="width 값 조정" width="500px" />
</div>
<div class="ui-wrap">
  <gt-input placeholder="height 값 조정" height="100px" />
</div>
<div class="ui-wrap">
  <gt-input disabled placeholder="disabled" />
</div>
`,
code_basic_css:`
.hiworks-input-custom-class {
  border: 4px solid orangered !important;
}
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
