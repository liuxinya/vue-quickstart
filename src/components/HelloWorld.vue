<template>
  <div ref='sd' class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ hehe }}</h2>
    <div>{{ num }}</div>
    <button @click='add'>增加</button>
    <Input v-model="num" placeholder="胜多负少的..." />
    <button @click='show'>点击弹窗</button>
    <Button type="success" @click='hidden'>隐藏弹窗</Button>
    <Slide></Slide>
  </div>
</template>

<script>
import Vue from 'vue'
import tipMessageVue from './tipMessage.vue'
import sliderVue from './slider';
export default {
  name: 'HelloWorld',
  components: {
    Slide: sliderVue
  },
  props: {
    msg: String
  },
  created() {
    // console.log(this)
  },
  mounted() {
    // console.log(this.$refs.sd)
  },
  data() {
    return {
      hehe: 'asdfadd',
      num: 0,
      tag: null
    }
  },
  methods: {
    add() {
      this.num ++;
    },
    show() {
      var MyComponent = Vue.extend(tipMessageVue)
      let tem = new MyComponent;
      tem.$options.props.msg='adfadfadf'
      tem.msg = '弹弹弹' + ++this.num;
      let tag = document.createElement('div');
      tag.setAttribute('class', 'temtem');
      document.body.appendChild(tag);
      tem.$mount(tag);
      this.$nextTick(() => {
        this.tag = tem.$el;
      })
    },
    hidden() {
      // console.log(this.tag)
      document.body.removeChild(this.tag);
    }
  },
  watch: {
    num: (nv, ov) => {
      // console.log(nv, ov)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  li {
    display: inline-block;
    margin: 0 10px;
  }
}
a {
  color: #42b983;
}
</style>