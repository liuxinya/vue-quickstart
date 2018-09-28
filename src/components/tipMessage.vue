<template>
<transition name='fade'>
    <div v-if='show' class="tip-m" :style='{"top": this.index * 40 + 10 + "px"}'>
        <div class="tip-container">{{ msg }}</div>
    </div>
</transition>
</template>

<script>
export default {
    props: {
        msg: String
    },
    data() {
        return {
            index: 0,
            show: false
        }
    },
    mounted() {
        this.show = true;
        this.index = document.querySelectorAll('.tip-m').length;
        setTimeout(() => {
            this.show = false;
            this.index = document.querySelectorAll('.tip-m').length;
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
    .tip-container {
        width: 200px;   
        line-height: 30px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
}
.fade-enter,
.fade-leave-to {
    opacity: 0.5;
    top: 0 !important;
}
</style>
