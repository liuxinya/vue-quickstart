<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ test }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() msg: string;
  @Prop({
    default: 2
  }) test: number;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.hello {
  h1 {
    color: orange;
  }
}
</style>
