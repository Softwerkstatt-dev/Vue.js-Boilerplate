<template>
  <div class="home">
    <HelloWorld v-bind:msg="text" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  public text: string = '';

  public created(): void {
    this.text = 'Welcome to Vue.js Typescript Boilerplate';
  }
}
</script>
