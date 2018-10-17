<template>
<transition name='fade'>
    <div v-if='show' class="tip-m" :style='{"top": this.getTop, }'>
        <div class="tip-container" :style='{
            "line-height": this.getH,
            "background-color": this.getbg
        }'>{{ msg }}</div>
    </div>
</transition>
</template>

<script>
export default {
    props: {
        msg: String,
        top: String,
        height: String,
        bg: String,
        time: Number
    },
    computed: {
        getTop() {
            return this.top? (this.top + 'px'): '10%';
        },
        getH() {
            return this.height? (this.height + 'px'): '30px';
        },
        getbg() {
            return this.bg? this.bg: 'rgba(0 , 0, 0, .6)';
        }
    },
    data() {
        return {
            index: 0,
            show: false
        }
    },
    mounted() {
        this.show = true;
        let t = this.time? this.time: 2000;
        setTimeout(() => {
            this.show = false;
        }, 2000)
    }
}
</script>

<style scoped lang='less'>
.tip-m {
    position: fixed;
    z-index: 999;
    left: 50%;
    transform: translateX(-50%);
    top: -30px;
    transition: all .6s;
    text-align: center;
    border-radius: 4px;
    color: #fff;
    .tip-container {
        border-radius: 4px;;
        width: 200px;   
        border: 1px solid #ccc;
    }
}
.fade-enter,
.fade-leave-to {
    opacity: 0.5;
    top: 0 !important;
}
</style>
