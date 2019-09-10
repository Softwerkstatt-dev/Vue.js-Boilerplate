<template>
  <div id="selection">
    <div class="inner">
      <Button
        class="btn btn-outline-secondary"
        type="button"
        @click="onSubmit">X</Button>
      <span>Selection-Detailansicht with ID {{id}}</span>
    </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class Selection extends Vue {
  public id: number = 0;

  public mounted(): void {
    this.id = Number(this.$route.params.requestId);
  }

  public onSubmit(): void {
    this.$router.push({ name: 'requests' });
  }


  @Watch('$route')
  public onPropertyChanged(value: any, oldValue: any): void {
    // console.log('onPropertyChanged', value, oldValue);
    if (!!value.params && !!value.params.requestId) {
      this.id = value.params.requestId;
    }
  }

}
</script>

<style scoped lang="scss">
#selection {
  width: calc(100% - 260px - 30px - 30px);
  height: 200px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  margin-left: calc(260px + 30px);
  box-shadow: 0 0 15px rgba(150,150,150,0.2);

  .inner {
    padding: 30px;
  }
}
</style>
