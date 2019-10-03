<template>
    <div id='container'>
        <span class="title">{{this.article.title}}</span>
        <span class="desc">{{this.article.preview}}</span>
        <span class="author">{{this.article.author}}</span>
        <span class="price">3</span>
    </div>
</template>

<script>
export default {
    props: {
        article: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
span {
    display: block;
}
.title {
    font-size: 30px;
    color: #2771DF;
}
.desc {
    font-size: 20px;
    color: #2771DF;
}
.author {
    font-size: 18px;
    color: #71757B;
}
.price {
    font-size: 18px;
    color: #71757B;
}
</style>