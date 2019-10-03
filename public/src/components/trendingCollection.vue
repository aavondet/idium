<template>
    <div id='container'>
        <span class="title">Trending in ______</span>
        <div class="row previews">
            <preview class="col-sm"/>
            <preview class="col-sm"/>
            <preview class="col-sm"/>
        </div>
    </div>
</template>

<script>
import Preview from "./Preview/preview.vue"

export default {
    components: {
        Preview
    }
}
</script>

<style scoped>
#container {
    width: 100%;
    height: 55%;
}
.title {
    font-size: 30px;
    color: #2771DF;
    padding: 10px;
}
.previews {
    height: 80%;
}
</style>