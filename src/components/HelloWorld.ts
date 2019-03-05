import { Component, Prop, Vue } from 'vue-property-decorator';
import * as withRender from './index.html';
import './index.less';

@withRender
@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}

// <!-- Add "scoped" attribute to limit CSS to this component only -->
// <style scoped lang="less">
// h3 {
//   margin: 40px 0 0;
// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
// }
// </style>
