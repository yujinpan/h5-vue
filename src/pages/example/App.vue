<template>
  <div id="app">
    <Example/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Example from './components/Example.vue';

@Component({
  components: {
    Example
  }
})
export default class App extends Vue {}
</script>


