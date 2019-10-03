<template>
    <div id='container'>
        <img src="../../../images/xrp.jpeg" alt="XRP">
        <previewDesc></previewDesc>
    </div>
</template>

<script>
import previewDesc from './previewDesc.vue'

export default {
    components: {
        previewDesc
    }
}
</script>

<style scoped>
#container {
    padding: 3%;
    width: 37%;
    height: 90%;
}
img {
    width: 100%;
    height: 100%;
    transition: transform .3s;
}
img:hover {
    transform: scale(1.1);
    cursor: pointer;
}
</style>