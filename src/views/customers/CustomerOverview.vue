<template>
  <div>
    <h1>Customer</h1>
    <Search placeholder="Write thatever you want" v-on:submit-triggered="onSearchSubmit"></Search>
    <Table v-bind:keys="keys" v-bind:items="items" is-row-clickable="true" v-on:on-row-clicked="linkToCustomerDetail"></Table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Search from '@/components/Search.vue';
import Table from '@/components/Table.vue';

@Component({
  components: {
    Search,
    Table
  },
})
export default class CustomerOverview extends Vue {

  public items: any = [];
  public keys: any = [];

  public created(): void {
    this.keys = ['SomeRandomRow', 'City', 'Country'];
    this.items = [
      {id: 1, data: ['x', 'Köln', 'DE']},
      {id: 2, data: ['y', 'Frankfurt am Main', 'DE']},
      {id: 3, data: ['z', 'Hamburg', 'DE']},
    ];
  }

  public onSearchSubmit(value: string): void {
    console.log('onSearchSubmit', value);
  }

  public linkToCustomerDetail(item: any): void {
    console.log('open Customer', item.id);
    const value = item.id;
    this.$router.push({ name: 'customer-id', params: { customerId: value } });
  }

}
</script>

<style scoped lang="scss">
</style>
