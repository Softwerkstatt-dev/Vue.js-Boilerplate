<template>
  <div class="dfl-container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col" v-for="(key, i) in keys" :key="i">{{key}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in items" :key="i" v-on:click="onRowClicked(item)" v-bind:class="{'rowClickable': isRowClickable}">
          <td v-for="(entry, i) in item.data" :key="i">{{entry}}</td>
        </tr>
      </tbody>
    </table>

    <!-- ToDo Pagination -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
  }
})
export default class Table extends Vue {

  @Prop() private keys!: string[];
  @Prop() private items!: object[];
  @Prop() private isRowClickable!: boolean;

  public onRowClicked(item: any): void {
    if (!this.isRowClickable) {
      return;
    }
    this.$emit('on-row-clicked', item);
  }


}
</script>

<style scoped lang="scss">
tr.rowClickable:hover td {
  background-color: rgba(206,212,218,0.2);
  cursor: pointer;
}
</style>
