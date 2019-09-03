<template>
  <div class="testTable">
    <h1>{{ text }}</h1>
    <button @click="onClick()" class="btn btn-secondary">Increase Counter +{{countIncrement}} from Child</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
  }
})
export default class HelloWorld extends Vue {
  @Prop() private text!: string;
  private countIncrement: number = 0;

  public created(): void {
    this.countIncrement = 3;
  }

  public onClick(): void {
    this.$emit('onIncreaseCounter', this.countIncrement);
  }
}
</script>

<style scoped lang="scss">
h1 {
  margin: 0;
}
</style>
