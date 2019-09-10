<template>
  <div>
    <h1>Kunden-Detailansicht</h1>
    <div class="dfl-container">ID: {{id}}</div>
    <div class="dfl-container">
      <table class="table">
        <tbody>
          <tr >
            <td></td>
            <td>{{data}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class CustomerDetail extends Vue {
  public id: number = 0;
  public data: object|undefined;

  public created(): void {
    this.data = {
      Name: 'Your name',
      Firma: 'Your company',
      Land: 'Your country'
    };
  }

  public mounted(): void {
    this.id = Number(this.$route.params.customerId);
    console.log('The id is: ' + this.id);
  }

  public destroyed(): void {
    console.log('destroyed');
  }
}
</script>

<style scoped lang="scss">
</style>
