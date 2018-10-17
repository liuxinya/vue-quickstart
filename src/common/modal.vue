<template>
    <transition name='fadein'>
        <div v-if='show' class="u-modal">
            <div class="m-content">
                <slot></slot>
                <span class='m-close' @click='closeM'></span>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
    methods: {
        closeM() {
            this.show = false;
            this.removeScrollListener();
        },
        defaultFun(e) {
            e.preventDefault();
            window.scrollTo(0, 0);   // 弹框之后 不让底层窗口再滚动
        },
        removeScrollListener() {
            window.removeEventListener('scroll', this.defaultFun); // 记得解绑
        }
    },
    mounted() {
        this.show = true;
        window.addEventListener('scroll', this.defaultFun)
    },
    destroyed() {
        this.removeScrollListener();
    }
}
</script>

<style scoped lang='less'>
    .u-modal {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0 ,0 , 0, .6);
        .m-content { 
            width: 70%;
            height: 50%;
            background-color: #fff;
            border-radius: 5px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            .m-close {
                position: absolute;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                top: -20px;
                right: -20px;
                background-color: rgba(0, 0, 0, .8);
            }
        }
    }
    .fadein-enter-active, .fadein-leave-active {
        opacity: 0;
        transition: opacity .6s;
    }
    .fadein-enter, .fadein-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    .fadein-enter-to, .fadein-leave/* .fade-leave-active below version 2.1.8 */ {
        opacity: 1;
    }
</style>
