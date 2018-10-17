<template>
    <div ref='sliderItem' class="slider-item" :style='{"background-color": bg}'>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        bg: String,
    },
    mounted() {
        this.$refs.sliderItem.style.height = document.body.clientHeight + 'px';
    }
}
</script>

<style scoped lang='less'>
.slider-item {
    overflow: hidden;
}
</style>
