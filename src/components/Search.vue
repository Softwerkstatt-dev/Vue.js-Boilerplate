<template>
  <div class="dfl-container">
    <span>Suche: </span>
    <div class="search">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          v-on:keyup.enter="onSubmit"
          v-bind:placeholder="placeholder"
          v-model="searchText"
          ref="inputField"
          />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="onSubmit"
            >Suchen</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
  }
})
export default class Search extends Vue {
  public searchText: string = '';
  @Prop() private placeholder!: string;

  public mounted(): void {
    this.focusInput();
  }

  public onSubmit(): void {
    const value = this.searchText;
    this.$emit('submit-triggered', value);
  }

  private focusInput(): void {
    // this.$refs.inputField.focus();
  }
}
</script>

<style scoped lang="scss">
.dfl-container{
  padding: 15px 30px;

  span {
    margin: 0 10px 0 0;
  }
  .search {
    width: 500px;
    display: inline-block;

    button {
      border: 1px solid #ced4da;

      &:hover {
        background-color: #ced4da;
        border: none;
      }
    }
  }
}
</style>
