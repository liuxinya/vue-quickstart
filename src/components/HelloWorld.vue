<template>
  <div ref='sd' class="hello">
    <h2>{{ hehe }}</h2>
    <div>{{ num }}</div>
    <button @click='add'>增加</button>
    <Input v-model="num" placeholder="胜多负少的..." />
    <button @click.stop='show'>点击弹窗</button>
    <Button type="success" @click='slider'>slider</Button>
    <Button type="success" @click.stop.prevent='modalshow'>点击弹出modal框</Button> <br/><br/>
    {{ `${time.hour}:${time.min}:${time.second}` }} <br/>
    {{ comment }} <br/>
    {{ new Date().getTime() | date }} <br>
    <comments 
        :data='commentList' 
        :totalComments='302' 
        @close='closeCom' 
        @clickLike='clickLike'>
    </comments>
    <sendC @send='send($event)' v-model='comment'></sendC>
  </div>
</template>

<script>
import Vue from 'vue'
import toast from '../common/toast'
import dynamic from '../services/dynamic.service.js'
import timeHelper from '../helper/time.helper.js'
import modalVue from '../common/modal.vue';
import sendC from '../common/sendComment';
import comments from '../common/comments';
import sliderVue from '../common/slider';
export default { 
  name: 'HelloWorld',
  components: {
    sendC,
    comments
  },
  props: {
    msg: String
  },
  created() {
    // console.log(this)
    timeHelper.getRestTime('2018/11/11 00:00:00', '2018/11/11 20:00', this.time);
  },
  mounted() {
    // console.log(this.$refs.sd)
  },
  data() {
    return {
      hehe: 'asdfadd',
      num: 0,
      tag: null,
      time: {
        hour: 0,
        min: 0,
        second: 0
      },
      comment: '',
      commentList: [
            {
                avatar: require('../assets/avatar.png'),
                username: '尼克',
                publishTime: 11,
                totalLikes: 30,
                commentInfo: "我是一条评论我是一条评论我是一条评论我是一条评论我是一条评论我是一条评论"
            },
            {
                avatar: require('../assets/avatar.png'),
                username: '朱迪',
                publishTime: 20,
                totalLikes: 40,
                isLike: true,
                commentInfo: "呵呵呵呵呵呵呵呵打发打发打发第三方的撒发打发第三方的撒发打发第三方的撒发打发第三方的撒发打发第三方的撒发打发第三方的撒"
            },
            {
                avatar: require('../assets/avatar.png'),
                username: '朱迪',
                publishTime: 20,
                totalLikes: 40,
                isLike: true,
                commentInfo: "呵呵呵呵呵呵呵呵打发打发打发第三方的撒发打发第三方的撒发打发第三方的撒发打发第三方的撒发打发第三方的撒发打发第三方的撒"
            },
            {
                avatar: require('../assets/avatar.png'),
                username: '朱迪',
                publishTime: 20,
                totalLikes: 40,
                isLike: true,
                commentInfo: "呵呵呵呵呵呵呵呵打发打发打发第三方的撒发打发第三方的撒发打发第三方的撒发打发第三方的撒发打发第三方的撒发打发第三方的撒"
            },
        ]
    }
  },
  methods: {
    add() {
      this.num ++;
    },
    show() {
      let instance = dynamic.open({
        component: toast,
        data: {
          msg: 'adfa',
        }
      });
    },
    modalshow() {
      dynamic.open({
        component: modalVue
      });
    },
    send(e) {
      console.log(e)
    },
    closeCom() {
      console.log('sdf')
    },
    clickLike(e) {
      console.log(e);
    },
    slider() {
      dynamic.open({
        component: sliderVue,
      })
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
.hello {
  position: relative;
  height: 100%;
}
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