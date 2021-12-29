<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import App from '../App.svelte';
</script>

<Meta title="App" component={App}/>

<Template let:args>
  <App {...args}/>
</Template>

<Story name="Default"/>
