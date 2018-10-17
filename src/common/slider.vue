<template>
    <div class="slider">
        <div ref='slider' class="container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import SliderService from '../services/slider.service.js';
export default {
    props:{
        length: Number,
        config: Object
    },
    data() {
        return {
            slider: null,
            timer: null
        }
    },
    methods: {
        init() {
            let sliderDom = this.$refs.slider;
            let bodyH = document.body.clientHeight; 
            sliderDom.style.height = bodyH * this.length + 'px';
            this.slider = new SliderService({
                dom: sliderDom,
                bodyH,
                length: this.length,
                ...this.config
            });
        },
        windowResize() {
            if(this.timer) clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                let newH = document.body.clientHeight;
                this.slider.bodyH = newH;
                this.$slots.default.forEach((item, index) => {
                    item.elm.style.height = newH + 'px';
                })
                this.slider.removeTransition();
                this.slider.resize();
            }, 200)
        }
    },
    mounted() {
        this.init();
        window.addEventListener('resize', this.windowResize)
    },
    destroyed() {
        window.removeEventListener('resize', this.windowResize)
    }
}
</script>

<style scoped lang='less'>
    .slider {
        height: 100%;
        overflow: hidden;
    }
</style>
