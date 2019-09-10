<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>This project should be a good kickstart for Vue.js projects using TypeScript.</p>
    <p><b>Features &amp; dependencies</b></p>
    <ul>
      <li>TypeScript</li>
      <li>SCSS</li>
      <li>TSLint: Airbnb style</li>
      <li>VueX</li>
      <li>VueRouter</li>
      <li>Axios</li>
      <li>Bootstrap</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  margin-left: 30px;
}
</style>
