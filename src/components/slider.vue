<template>
    <div class="slider">
        <div class="container">
            <div class="view"></div>
            <div class="view"></div>
            <div class="view"></div>
            <div class="view"></div>
            <div class="view"></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='less'> 
.slider {
    width: 100%;
    overflow: auto;
    .container {
        width: 500px;
        .view {
            display: inline-block;
            width: 100px;
            height: 100px;
            border: 1px solid #ccc;
        }
    }
}
</style>
