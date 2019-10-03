<template>
    <div id='app'>
        <Header></Header>
        <trending-collection></trending-collection>
        <trending-collection></trending-collection>
        <trending-collection></trending-collection>
        <loginModal v-if="this.showLogin"></loginModal>
        <signupModal v-if="this.showSignup"></signupModal>
    </div>
</template>

<script>
import Header from './header.vue'
import Preview from './Preview/preview.vue'
import TrendingCollection from './trendingCollection.vue'
import loginModal from './loginModal.vue'
import signupModal from './signupModal.vue'
import Bus from '../bus.js'

export default {
    components: {
        Header,
        TrendingCollection,
        loginModal,
        signupModal
    },
    data() {
        return {
            showLogin: false,
            showSignup: false
        }
    },
    mounted() {
        Bus.$on('showLogin', this.showLoginM);
        Bus.$on('showSignup', this.showSignupM);
        Bus.$on('closeLogin', this.closeLoginM);
        Bus.$on('closeSignup', this.closeSignupM);
    },
    methods: {
        showLoginM () {
            this.showLogin = true
        },
        closeLoginM () {
            this.showLogin = false
        },
        showSignupM () {
            this.showSignup = true
        },
        closeSignupM () {
            this.showSignup = false
        }
    }
}
</script>

<style scoped>
#app {
    height: 100%;
    width: 100%;
}
</style>