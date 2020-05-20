<gt-panel>
  <template #title>basic</template>
  <template #box>
    <gt-tooltip v-bind="{ position: 'bottom', message: 'gabia' }" style="margin-right:30px;" >
      <gtbutton indicator="primary" >bottom</gtbutton>
    </gt-tooltip>
    <gt-tooltip v-bind="{ position: 'top', message: 'hiworks', type: 'info' }" style="margin-right:30px;"  >
      <gtbutton indicator="secondary" >top</gtbutton>
    </gt-tooltip>
    <gt-tooltip v-bind="{ position: 'left', message: 'frontend',  type: 'warning' }" style="margin-right:30px;" >
        <gtbutton indicator="danger" >left</gtbutton>
    </gt-tooltip>
    <gt-tooltip v-bind="{ position: 'right', message: 'js', type: 'danger' }" style="margin-right:30px;"  >
      <gtbutton type="icon" icon="lock" />
    </gt-tooltip>
    <gt-tooltip v-bind="{ position: 'bottom', message: 'userStyle', type: 'info' , userStyle:{color:'red' , fontSize:'16px'} }" style="margin-right:30px;"  >
      <span class="gt-btn red">userStyle</span>
    </gt-tooltip>
  </template>
</gt-panel>