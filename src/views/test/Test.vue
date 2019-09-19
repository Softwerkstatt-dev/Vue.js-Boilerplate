<template>
  <div class="testPage">
    <div><b>Value from Store:</b> {{count}}</div>
    <div><b>Computed Property from Store:</b> {{computedCount}}</div>
    <div><b>Data:</b> {{fullNames}}</div>
    <a href="#" @click="onClickButton()" class="btn btn-secondary">Increase Counter</a>
    <SubTest text="Child Component" @onIncreaseCounter="onClickFromChild" />
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import SubTest from './SubTest.vue';
import Store from '@/store/store';
import Component from 'vue-class-component';
import { State, Action, Getter } from 'vuex-class';
import { ProfileState, User } from '@/store/modules/profile';
const namespace: string = 'profile';

@Component({
  components: {
    SubTest
  }
})
export default class Counter extends Vue {
  @State('profile') public profile: ProfileState|undefined;
  @Action('fetchUser', { namespace }) public fetchUser: any;
  @Action('increment', { namespace }) public increment: any;
  @Action('incrementBy', { namespace }) public incrementBy: any;
  @Getter('fullNames', { namespace }) public fullNames: string|undefined;
  @Getter('count', { namespace }) public count: number|undefined;

  public calculated = {
    count(): number {
      console.log(Store);
      return 0;
    }
  };

  public mounted(): void {
    this.fetchUser();
  }

  // computed property
  get computedCount(): number|undefined {
    return this.count;
  }

  public created(): void {
    console.log('created');
  }

  public onClickButton(): void {
    this.increment();
  }

  public onClickFromChild(count: number): void {
    this.incrementBy(count);
  }

}
</script>

<style scoped lang="scss">
</style>
