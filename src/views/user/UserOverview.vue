<template>
  <div>
    <h1>User</h1>
    <Search
      placeholder="Search for X, Y or Z"
      v-on:submit-triggered="onSearchSubmit"
      ></Search>
    <Table
      v-bind:keys="keys"
      v-bind:items="items"
      is-row-clickable="true"
      v-on:on-row-clicked="clickOpenSelection"
      ></Table>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import Search from '@/components/Search.vue';
import Table from '@/components/Table.vue';
import Selection from './Selection.vue';

@Component({
  components: {
    Search,
    Table,
    Selection
  },
})
export default class UserOverview extends Vue {

  public items: any = [];
  public keys: any = [];
  public isSelectionVisible: boolean = false;

  public created(): void {
    this.keys = ['Row 1', 'Row 2', 'Row 3', 'Text', 'Price 1', 'date', 'Price 2'];
    this.items = [
      {data: ['1', '66', '2', 'some', '1 €', '23.12.2016', '160 €']},
      {data: ['2', '66', '2', 'random', '2 €', '23.12.2016', '40 €']},
      {data: ['3', '66', '2', 'data', '3 €', '23.12.2016', '1337 €']},
      {data: ['4', '66', '2', 'columns', '4 €', '23.12.2016', '42 €']}
    ];
  }

  public onSearchSubmit(value: string): void {
    console.log('onSearchSubmit', value);
  }

  public clickOpenSelection(item: any): void {
    const pageId = this.$route.params
      && this.$route.params.requestId
      && Number(this.$route.params.requestId);
    const newPageId: number = Number(item.data[0]);
    const isCurrentPageAlreadyOpen = pageId === newPageId;
    if  (isCurrentPageAlreadyOpen) {
      return;
    }
    this.$router.push({ name: 'request-id', params: { requestId: String(newPageId) } });
  }

}
</script>

<style scoped lang="scss">
</style>
