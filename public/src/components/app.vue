<template>
    <div id='app'>
        <Header></Header>
        <trending-collection></trending-collection>
        <trending-collection></trending-collection>
        <trending-collection></trending-collection>
    </div>
</template>

<script>
import Header from './header.vue'
import Preview from './Preview/preview.vue'
import TrendingCollection from './trendingCollection.vue'

export default {
    components: {
        Header,
        TrendingCollection
    }
}
</script>

<style scoped>
#app {
    height: 100%;
    width: 100%;
}
</style>