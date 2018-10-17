<template>
    <div class="s-comment">
        <input maxlength='50' :placeholder='"说说你的想法吧..."' @input='change($event)' type="text" v-model='content'>
        <span @click='send' class='send'>
            <img src="../assets/arrow-up.png" alt="">
        </span>
        <div class="len">
            <span :style="{color: this.content.length >= 45? 'orange': '#fff'}">{{`${this.content.length}`}}</span>/50
        </div>
    </div>
</template>

<script>
export default {
    computed: {
    },
    data() {
        return {
            content: ''
        }
    },
    mounted() {
        
    },
    methods: {
        change(e) {
            this.$emit('input', e.target.value)
        },
        send() {
            this.$emit('send', this.content)
        }
    }
}
</script>

<style scoped lang='less'>
.s-comment {
    height: 60px;
    background-color: rgba(0, 0, 0, .9);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px 8px;
    input {
        height: 28px;
        background-color: rgb(66, 69, 74, .8);;
        border: none;
        outline: none;
        color: #fff;
        padding: 2px 4px;
        width: 80%;
        position: absolute;
        left: 10px;
        border-radius: 4px;
    }
    span.send {
        display: inline-block;
        width: 26px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        border-radius: 50%;
        background-color: #fff;
        position: absolute;
        right: 20px;
        vertical-align: middle;
        img {
            width: 16px;
            height: 16px;
            vertical-align: middle;
        }
    }
    .len {
        position: absolute;
        bottom: 2px;
        left: 72%;
        color: #fff;
    }

}
</style>
