<template>
  <section>
    <header>
      Collapse
    <p class="contents-header-desc">Collapse user guide</p>
    </header>

    <div class="body-components">
      <h2 class="group-title">Usage</h2>
      <!-- Basic -->
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
        <prism-editor :lineNumbers="true" :code="code_basic" :readonly="true" language="html"></prism-editor>
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
        <prism-editor :lineNumbers="true" :code="code_activate" :readonly="true" language="html"></prism-editor>
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
        <prism-editor :lineNumbers="true" :code="code_accordion" :readonly="true" language="html"></prism-editor>
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
        <prism-editor :lineNumbers="true" :code="code_accordion" :readonly="true" language="html"></prism-editor>
      </div>

      <h2 class="group-title">Props</h2>
      <!-- gt-collapse  -->
      <div class="group">
        <p class="group-sub-title">gt-collapse</p>
        <table class="group-table">
          <colgroup>
            <col style="width: 33%">
            <col style="width: 33%">
            <col style="width: 34%">
          </colgroup>
          <thead>
            <tr>
              <th>OPTION</th>
              <th>TYPE</th>
              <th>DEFAULT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>accordion</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>init</td>
              <td>String</td>
              <td>null</td>
            </tr>
            <tr>
              <td>opened</td>
              <td>Function</td>
              <td>null</td>
            </tr>
            <tr>
              <td>closed</td>
              <td>Function</td>
              <td>null</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- gt-collapse-item  -->
      <div class="group">
        <p class="group-sub-title">gt-collapse-item</p>
        <table class="group-table">
          <colgroup>
            <col style="width: 33%">
            <col style="width: 33%">
            <col style="width: 34%">
          </colgroup>
          <thead>
            <tr>
              <th>OPTION</th>
              <th>TYPE</th>
              <th>DEFAULT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>name</td>
              <td>[String, Number]</td>
              <td>null</td>
            </tr>
          </tbody>
        </table>
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
</style>
