<template>
  <section>
    <header>
      Collapse
    <p class="contents-header-desc">Collapse user guide</p>
    </header>

    <!-- Basic -->
    <div class="body-components">
      <h2 class="group-title">Example</h2>
      <div class="group">
        <gt-panel>
          <template #title>Basic</template>
          <template #body>
            <gt-collapse>
              <gt-collapse-item>
                <template #head>Default Type Head 1</template>
                <template #content>Default Type Content 1</template>
              </gt-collapse-item>
              <gt-collapse-item>
                <template #head>Default Type Head 2</template>
                <template #content>Default Type Content 2</template>
              </gt-collapse-item>
            </gt-collapse>
          </template>
        </gt-panel>
        <prism-editor :code="code_basic" :readonly="true" language="html"></prism-editor>
      </div>
      <!-- Activate -->
      <div class="group">
        <gt-panel>
          <template #title>Activate</template>
          <template #body>
            <gt-collapse init="item1">
              <gt-collapse-item name="item1">
                <template #head>Activated Head</template>
                <template #content>Activated Content</template>
              </gt-collapse-item>
              <gt-collapse-item name="item2">
                <template #head>Head</template>
                <template #content>Content</template>
              </gt-collapse-item>
            </gt-collapse>
          </template>
        </gt-panel>
        <prism-editor :code="code_activate" :readonly="true" language="html"></prism-editor>
      </div>
      <!-- Accordion  -->
      <div class="group">
        <gt-panel>
          <template #title>Accordion</template>
          <template #body>
            <gt-collapse accordion>
              <gt-collapse-item>
                <template #head>Accordion Type Head 1</template>
                <template #content>Accordion Type Content 1</template>
              </gt-collapse-item>
              <gt-collapse-item>
                <template #head>Accordion Type Head 2</template>
                <template #content>Accordion Type Content 2</template>
              </gt-collapse-item>
            </gt-collapse>
          </template>
        </gt-panel>
        <prism-editor :code="code_accordion" :readonly="true" language="html"></prism-editor>
      </div>
      <!-- Event  -->
      <div class="group">
        <gt-panel>
          <template #title>Event</template>
          <template #body>
            <gt-collapse :opened="onOpend" :closed="onClosed">
              <gt-collapse-item>
                <template #head>Head 1</template>
                <template #content>Content 1</template>
              </gt-collapse-item>
              <gt-collapse-item>
                <template #head>Head 2</template>
                <template #content>Content 2</template>
              </gt-collapse-item>
            </gt-collapse>
          </template>
        </gt-panel>
        <prism-editor :code="code_accordion" :readonly="true" language="html"></prism-editor>
      </div>

      <h2 class="group-title">Usage</h2>
      <div class="group">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "collapse-view",
  data() {
    return {
      code_basic: `<gt-collapse>
  <gt-collapse-item>
    <template #head>Default Type Head 1</template>
    <template #content>Default Type Content 1</template>
  </gt-collapse-item>
  <gt-collapse-item>
    <template #head>Default Type Head 2</template>
    <template #content>Default Type Content 2</template>
  </gt-collapse-item>
</gt-collapse>`,
      code_activate: `<gt-collapse init="item1">
  <gt-collapse-item name="item1">
    <template #head>Activated Head</template>
    <template #content>Activated Content</template>
  </gt-collapse-item>
  <gt-collapse-item name="item2">
    <template #head>Head</template>
    <template #content>Content</template>
  </gt-collapse-item>
</gt-collapse>`,
      code_accordion: `<gt-collapse accordion>
  <gt-collapse-item>
    <template #head>Accordion Type Head 1</template>
    <template #content>Accordion Type Content 1</template>
  </gt-collapse-item>
  <gt-collapse-item>
    <template #head>Accordion Type Head 2</template>
    <template #content>Accordion Type Content 2</template>
  </gt-collapse-item>
</gt-collapse>`,
      code_event: `<gt-collapse :opened="onOpend" :closed="onClosed">
  <gt-collapse-item>
    <template #head>head</template>
    <template #content>content1</template>
  </gt-collapse-item>
  <gt-collapse-item>
    <template #head>head</template>
    <template #content>content2</template>
  </gt-collapse-item>
</gt-collapse>`
    };
  },
  methods: {
    onOpend(payload) {
      alert(`opened: ${payload}`);
    },
    onClosed(payload) {
      alert(`closed: ${payload}`);
    }
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

  .group-title {
    font-weight: normal;
    font-size: 26px;
    margin-top: 65px;
    margin-bottom: 30px;
    padding-bottom: 10px;
    line-height: 44px;
    border-bottom: 1px solid #ddd;
  }
}
</style>
