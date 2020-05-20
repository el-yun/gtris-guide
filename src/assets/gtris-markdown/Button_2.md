<gt-panel>
  <template #title>Colored</template>
  <template #box>
    <gtbutton indicator="primary" style="margin-right:10px;">버튼(Primary)</gtbutton>
    <gtbutton indicator="secondary" style="margin-right:10px;">버튼(Secondary)</gtbutton>
    <gtbutton indicator="danger" style="margin-right:10px;">버튼(Danger)</gtbutton>
    <gtbutton indicator="primary" style="margin-right:10px;" :disabled="true">
      버튼(Primary)
    </gtbutton>
    <gtbutton indicator="secondary" style="margin-right:10px;" :disabled="true">
      버튼(Secondary)
    </gtbutton>
    <gtbutton indicator="danger" style="margin-right:10px;" :disabled="true">
      버튼(Danger)
    </gtbutton>
  </template>
</gt-panel>