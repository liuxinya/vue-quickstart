<template>
  <div id="app">
    <slider :length='pages.length'>
      <slider-item v-for='(item, index) in pages' :key='index' :bg='item.bg'>
        <component :is="item.component"></component>
      </slider-item>
    </slider>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import slider from './common/slider'
import sliderItem from './common/slider-item'
export default {
  name: 'app',
  components: {
    HelloWorld,
    slider,
    "slider-item": sliderItem
  },
  data() {
    return {
      pages: [
        {
          val: 1,
          bg: "pink",
          component: HelloWorld
        },{
          val: 2,
          bg: 'hotpink'
        },{
          val: 3,
          bg: 'orange'
        },{
          val: 4,
          bg: 'red'
        }
      ]
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
