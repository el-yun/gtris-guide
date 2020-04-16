<template>
  <div class="guide">
    <header class="guide-header">
      Gtris Version 3 Guide
    </header>
    <div class="guide-title">
      설치방법(Vue) - cmd
    </div>
    <!-- eslint-disable -->
    <div class="guide-desc">
      npm install --save git+https://gm1702759:zKzTTuQkg7unZ-NdrAYM@gitlab.gabia.com/ui/gtris3-vue.git
    </div>

    <div class="guide-title">
      설치방법(Vue) - package.json 추가
    </div>
    <div class="guide-desc">
      "@gtris/vue": "git+https://gm1702759:zKzTTuQkg7unZ-NdrAYM@gitlab.gabia.com/ui/gtris3-vue.git" 추가
    </div>

    <div class="guide-title">
      설정 방법(Vue) - 코드 추가
    </div>
    <div class="guide-desc">
      import gtris from "@gtris/vue";<br>
      import "@gtris/vue/dist/gtris3.css";
    </div>

    <div class="guide-title">
      가이드 화면 내 DISQUS 추가
    </div>
    <prism-editor
      :code="disqus_str"
      :readonly="true"
      language="html"
    ></prism-editor>
    <!-- eslint-enable -->

    <div class="guide-title">
      Gtris NPM 관련 Comments
    </div>
    <div class="comments">
      <vue-disqus
        shortname="gtris3"
        identifier="npm"
        url="http://fe.gabia.com/gtris3"
        title="Gtris3"
      ></vue-disqus>
    </div>
  </div>
</template>


<script>
export default {
  name: "guide",
  data() {
    return {
      disqus_str: `<!-- ID와 Path는 다른 컴포넌트와 중복되면 안됨, 값을 수정하더라도 실제 반영되는데는 5분이상 소요 -->
<vue-disqus
  shortname="gtris3"
  identifier="{컴포넌트ID}"
  url="http://fe.gabia.com/gtris3/{컴포넌트 Path}"
  title="{컴포넌트 타이틀}"
></vue-disqus>`
    };
  }
};
</script>
<style lang="scss" scoped>
.guide {
  padding: 70px 10px;

  .guide-header {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 15px;
  }

  .guide-title {
    margin: 24px 0 16px;
    font-size: 1.25rem;
    color: #2e2e2e;
    font-weight: 600;
    line-height: 1.2;
  }

  .guide-desc {
    background-color: #1d1f21;
    color: #c5c8c6;
    margin-bottom: 16px;
    font-size: 0.875rem;
    line-height: 26px;
    overflow-x: auto;
    border-radius: 2px;
    display: block;
    padding: 8px 12px;
    margin: 0 0 8px;
    word-break: break-all;
    word-wrap: break-word;
    border: 1px solid #e5e5e5;
    overflow: auto;
  }
}
</style>
