<template>
  <section>
    <header>
      Button
    </header>
    <p class="contents-header-desc">Button user guide</p>
    <div class="comments">
      <vue-disqus
        shortname="gtris3"
        identifier="button"
        url="http://fe.gabia.com/gtris3/component/button"
        title="Gtris Button"
      ></vue-disqus>
    </div>
    <div class="body-components">
      <h2 class="group-title">Usage</h2>
      <!-- Basic -->
      <div class="group">
        <gt-panel>
          <template #title>Basic</template>
          <template #body>
            <gtbutton>버튼(default)</gtbutton>
            <gtbutton :disabled="true">버튼(disabled)</gtbutton>
          </template>
        </gt-panel>
        <prism-editor
          :code="basic_btn_str"
          :readonly="true"
          language="html"
        ></prism-editor>
      </div>

      <!-- Colored -->
      <div class="group">
        <gt-panel>
          <template #title>Colored</template>
          <template #body>
            <gtbutton indicator="primary">버튼(Primary)</gtbutton>
            <gtbutton indicator="secondary">버튼(Secondary)</gtbutton>
            <gtbutton indicator="danger">버튼(Danger)</gtbutton>
            <gtbutton indicator="primary" :disabled="true">
              버튼(Primary)
            </gtbutton>
            <gtbutton indicator="secondary" :disabled="true">
              버튼(Secondary)
            </gtbutton>
            <gtbutton indicator="danger" :disabled="true">
              버튼(Danger)
            </gtbutton>
          </template>
        </gt-panel>
        <prism-editor
          :code="color_btn_str"
          :readonly="true"
          language="html"
        ></prism-editor>
      </div>

      <!-- Icon -->
      <div class="group">
        <gt-panel>
          <template #title>Icon</template>
          <template #body>
            <gtbutton type="icon" icon="trash" />
            <gtbutton type="icon" icon="check" />
            <gtbutton type="icon" icon="heart" />
            <gtbutton type="icon" icon="cog" />
            <gtbutton type="icon" icon="label" />
            <gtbutton type="icon" icon="mail" />
            <gtbutton type="icon" icon="memo" />
            <gtbutton type="icon" icon="message" />
            <gtbutton type="icon" icon="plus" />
            <gtbutton type="icon" icon="minus" />
            <gtbutton type="icon" icon="bell" />
            <gtbutton type="icon" icon="lock" />
            <gtbutton type="icon" icon="paperclip" />
            <gtbutton type="icon" icon="search" />
            <gtbutton type="icon" icon="star" />
            <gtbutton type="icon" icon="star-cancel" />
            <gtbutton type="icon" icon="user" />
            <gtbutton type="icon" icon="print" />
          </template>
        </gt-panel>
        <prism-editor
          :code="icon_btn_str"
          :readonly="true"
          language="html"
        ></prism-editor>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "component-button",
  data() {
    return {
      basic_btn_str: `<gtbutton>버튼(default)</gtbutton>\n<gtbutton :disabled="true">버튼(disabled)</gtbutton>`,
      color_btn_str: `<gtbutton indicator="primar">버튼(Primary)</gtbutton>\n<gtbutton indicator="secondary">버튼(Secondary)</gtbutton>\n<gtbutton indicator="danger">버튼(Danger)</gtbutton>`,
      icon_btn_str: `<gtbutton type="icon" icon="trash" />\n<gtbutton type="icon" icon="check" />\n<gtbutton type="icon" icon="heart" />\n<gtbutton type="icon" icon="cog" />\n<gtbutton type="icon" icon="label" />\n<gtbutton type="icon" icon="mail" />\n<gtbutton type="icon" icon="memo" />\n<gtbutton type="icon" icon="message" />\n<gtbutton type="icon" icon="plus" />\n<gtbutton type="icon" icon="minus" />\n<gtbutton type="icon" icon="bell" />\n<gtbutton type="icon" icon="lock" />\n<gtbutton type="icon" icon="paperclip" />\n<gtbutton type="icon" icon="search" />\n<gtbutton type="icon" icon="star" />\n<gtbutton type="icon" icon="star-cancel" />\n<gtbutton type="icon" icon="user" />\n<gtbutton type="icon" icon="print" />`
    };
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
}
</style>
