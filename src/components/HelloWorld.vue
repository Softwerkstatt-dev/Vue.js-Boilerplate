<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Lorem Ipsun
    </p>
    <div class="custom-container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Tool</th>
            <th scope="col">Comment</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td v-for="(entry, i) in item.data" :key="i">{{entry}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {

  public items: any = [];
  @Prop() private msg!: string;

  public created(): void {
    this.items = [
      {id: 0, data: ['Vue', 'UI Framework']},
      {id: 1, data: ['TypeScript', 'kindof object-oriented style and typesafety']},
      {id: 2, data: ['SCSS Support', 'CSS']},
      {id: 3, data: ['TSLint', 'Code Cleanup']},
      {id: 4, data: ['Bootstrap', 'Styles Framework']},
      {id: 4, data: ['VueX', 'Store']},
      {id: 4, data: ['VueRouter', 'Routing']}
    ];
  }

}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
