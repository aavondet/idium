import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/app.vue'

window.onload = function () {
new Vue({
    el : 'app',
    components : {App},
    template: '<App/>'
})
}