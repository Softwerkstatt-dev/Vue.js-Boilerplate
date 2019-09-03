<template>
  <div class="testPage">
    <div><b>Value from Store:</b> {{count}}</div>
    <div><b>Computed Property from Store:</b> {{computedCount}}</div>
    <div><b>Data:</b> {{fullNames}}</div>
    <a href="#" @click="onClickButton()" class="btn btn-secondary">Increase Counter</a>
    <TestTable text="Child Component" @onIncreaseCounter="onClickFromChild" />
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import TestTable from '@/views/TestTable.vue';
import Store from '@/store';
import Component from 'vue-class-component';
import { State, Action, Getter } from 'vuex-class';
import { ProfileState, User } from '@/store/profile/types';
const namespace: string = 'profile';

@Component({
  components: {
    TestTable
  }
})
export default class Counter extends Vue {
  @State('profile') public profile: ProfileState|undefined;
  @Action('fetchProfiles', { namespace }) public fetchProfiles: any;
  @Action('increment', { namespace }) public increment: any;
  @Action('incrementBy', { namespace }) public incrementBy: any;
  @Getter('fullNames', { namespace }) public fullNames: string|undefined;
  @Getter('count', { namespace }) public count: number|undefined;

  public calculated = {
    // count(): number {
    //   return Store.state.count;
    // }
  };

  public mounted(): void {
    // fetching data as soon as the component's been mounted
    this.fetchData();
  }

  // computed property
  get computedCount(): number|undefined {
    return this.count;
    // return 42;
  }

  // @Watch('myProperty')
  // onPropertyChanged(value: string, oldValue: string) {
  //   // Do stuff with the watcher here.
  // }

  public created(): void {
    console.log('created');
  }

  public onClickButton(): void {
    this.increment();
  }

  public onClickFromChild(count: number): void {
    this.incrementBy(count);
  }

  public fetchData(): void {
    console.log('fetchData');
    this.fetchProfiles();
  }

}
</script>

<style scoped lang="scss">
</style>
