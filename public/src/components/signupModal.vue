<template> 
<transition name="modal">
    <div class="modal-mask">
        <div class="modal-container">
            <div class="modal-header">Signup</div>
            <div class="form">
                <div class="form-label">Username</div>
                <input type=text v-model="username"></input>
            </div>
            <div class="form">
                <div class="form-label">Password</div>
                <input type=text v-model="pass"></input>
            </div>
            <div class="form">
                <div class="form-label">XRP Secret</div>
                <input type=text v-model="secret"></input>
            </div>
            <div class="form">
                <div class="form-label">ILP Name</div>
                <input type=text v-model="ilp_name"></input>
            </div>
            <div class="form">
                <div class="form-label">ILP Pointer</div>
                <input type=text v-model="ilp_pointer"></input>
            </div>
            <div class="form">
                <button class="submit" @click='submit'>Submit</button>
                <button class="close" @click='close'>Close</button>
            </div>
        </div>
    </div>
</transition>
</template>

<script>
import axios from 'axios'
import Bus from '../bus.js'

export default {
    data() {
        return {
            username: '',
            pass: '',
            secret: '',
            ilp_pointer: '',
            ilp_name: '',
            address: ''
        }
    },
    methods: {
        close() {
            Bus.$emit('closeSignup')
        },
        submit(){
            var url = '/account/'
            var newUser = {
                username: this.username,
                pass: this.pass,
                secret: this.secret,
                ilp_pointer: this.ilp_pointer,
                ilp_name: this.ilp_name,
                address: this.address
            };
            axios.post(url, newUser)
            .then((lunch) => {
                Bus.$emit('closeSignup')
            })
            .catch((err) => console.log(err))
        },
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;
}

.modal-container {
    width: 300px;
    margin: 40px auto 0;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.form-label {
    display: block;
    margin-bottom: 1em;
}

button {
    border-radius: 3px;
}
</style>
