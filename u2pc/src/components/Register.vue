<template>
   <div id="register">
       <div class="input-field">
            <div class="user-field">
                <span>账号:</span>
                <input type="text" maxlength="32" tabindex="1" aria-label="邮箱" v-model="email">
            </div>
            
            <div class="pwd-field">
                <span>密码:</span>
                <input type="text" maxlength="32" tabindex="2" aria-label="登录密码" autocomplete="off" v-model="password">
            </div>
        </div>

        <div class="button-field">
            <button class="btn" style="background-color: #4CAF50;" v-on:click="register()">注册</button>
            <button class="btn" style="background-color: red;" v-on:click="cancel()">取消</button>
        </div>
   </div> 
</template>

<script>
import {setCookie, getCookie, delCookie} from '../js/cookie'
const axios = require('axios');

export default {
    name: 'Register',
    data() {
        return {
            email: '',
            password: '',
            userId: 0
        }
    },
    methods: {
        register: function(){
            axios({
                url: 'http://localhost:8070/register',
                method: 'post',
                params:{
                    email: this.email,
                    password: this.password
                },
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*' 
                },
                timeout: 1000
            }).then((response)=>{
                console.log(response)
                if(response.status == 200){
                    this.userId = response.data
                    this.$emit('setRegister', false)
                    console.log(this.userId)
                }
            })
            
        },
        cancel: function(){
            this.$emit('setRegister', false)
        }
    },    
}
</script>

<style scoped>
#register{
    position: absolute;
    top: 50%;   
    left: 50%;   
    transform: translate(-50%, -50%);   
    width: 300px;
    height: 200px;
    border: 2px solid #eee;
    border-radius: 10px;
    background-color: #fff;
    padding: 5px;
}
.input-field{
    margin-top: 10px;
    padding: 10px;
}
.user-field{
    margin-top: 10px; 
}
span{
    margin: 10px;
    text-align: center;
}
.pwd-field{
    margin-top: 20px;
}
.button-field{
    margin: 15px 40px;
    display: flex;
    flex-direction: row;
}
.btn{
    flex: 1;
    margin: 5px 10px;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border: none;
    border-radius: 5px; 
}
</style>
