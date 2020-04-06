<template>
  <section>
    <header>
      Pagination
    </header>
    <p class="contents-header-desc">Pagination user guide</p>
    <div class="body-components">
      <!-- preview button tag -->
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
          <gtbutton>버튼(default)</gtbutton>
          <gtbutton :disabled="true">버튼(disabled)</gtbutton>
        </div>
      </div>
      <div class="gist">
        <div class="gist-code">
          <div class="gist-data">
            <textarea :value="basic_btn_str" disabled style="height: 70px;" />
          </div>
        </div>
      </div>
      <!-- color button tag -->
      <p class="gt-panel-title">Colored 버튼</p>
      <div class="gt-panel">
        <div class="gt-panel-header">
          <div class="circles">
            <span class="circle circle-red"></span>
            <span class="circle circle-yellow"></span>
            <span class="circle circle-green"></span>
          </div>
        </div>
        <div class="gt-panel-body">
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
        </div>
      </div>
      <div class="gist">
        <div class="gist-code">
          <div class="gist-data">
            <textarea :value="color_btn_str" disabled />
          </div>
        </div>
      </div>

      <!--icon button tag -->
      <p class="gt-panel-title">Colored 버튼</p>
      <div class="gt-panel">
        <div class="gt-panel-header">
          <div class="circles">
            <span class="circle circle-red"></span>
            <span class="circle circle-yellow"></span>
            <span class="circle circle-green"></span>
          </div>
        </div>
        <div class="gt-panel-body">
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
        </div>
      </div>
      <div class="gist">
        <div class="gist-code">
          <div class="gist-data">
            <textarea :value="icon_btn_str" disabled style="height:400px;" />
          </div>
        </div>
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
