<template>
    <div id='container'>
        <span class='title'>idium</span>
        <div class="buttons">
            <button class="article" @click="createArticle">Create Article</button>
            <button class="login" @click="showLogin">Login</button>
            <button class="signup" @click="showSignup">Signup</button>
        </div>
    </div>
</template>

<script>
import Bus from '../bus.js'

export default {
    methods: {
        showLogin() {
            Bus.$emit('showLogin')
        },
        showSignup() {
            Bus.$emit('showSignup')
        },
        createArticle() {
            Bus.$emit('createArticle')
        }
    }
}
</script>

<style scoped>
#container {
    width: 100%;
    height:10%;
    position: inline;
}
.title {
    font-size: 50px;
    color: #2771DF;
    padding: 10px;
}
.login {
    font-size: 20px;
    color: white;
    padding: 10px;
    background: #2771DF;
    border-radius: 5px;
}
.signup {
    font-size: 20px;
    color: white;
    padding: 10px;
    background: #2771DF;
    border-radius: 5px;
}
.account {
    align-content: right;
}
button {
    display: inline;
}
.buttons {
    float: right;
    padding: 5px;
}
</style>