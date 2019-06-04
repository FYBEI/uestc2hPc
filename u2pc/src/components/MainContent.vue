<!-->u2pc首页总组件，包含了背景、两种用户登录框、种类选择栏、内容、底部页码<-->
<template>
  <div id="main">
    <background/>
    <div v-if="login">
      <user v-bind:user="user"/>
    </div>
    <div v-else-if="!login">
      <unloginUser v-on:setRegister="setRegister" v-on:getLogin="getLogin"/>
    </div>
    <register v-on:setRegister="setRegister" :hidden="!reg"/>

    <router-view/>
    <tabbar v-on:getKind="getKind"/>
    <mycontent v-bind:commodityList="commodityList"/>
    <pagenation/>
  </div>
</template>

<script>
import background from './Background'
import unloginUser from './unloginUser.vue'
import user from './User.vue'
import tabbar from './Tabbar.vue'
import mycontent from './Content.vue'
import pagenation from './Pagenation'
import register from './Register'

const axios = require('axios');

export default {
  name: 'MainContent',
  components: {
    unloginUser: unloginUser,
    user: user,
    tabbar: tabbar,
    mycontent: mycontent,
    pagenation: pagenation,
    background: background,
    register: register
  },
  data() {
    return {
      login: false,
      reg: false,
      user: {
        userId: 0,
        userName: '',
        password: '',
        email: '',
        phone: '',
        sign: '',
        img: {
          id: 0,
          imgId: 0,
          name: '',
          size: 0
        }
      },
      commodityList: []
    }
  },
  created() {
    this.query()
  },
  methods: {
    setRegister: function(reg){
      this.reg = reg
    },
    getLogin: function(param){
      this.login = param.login

      this.user.userId = param.user.userId
      this.user.userName = param.user.userName
      this.user.password = param.user.password
      this.user.email = param.user.email
      this.user.phone = param.user.phone
      this.user.sign = param.user.sign
      this.user.img.imgId = param.user.img.imgId
      this.user.img.id = param.user.img.id
      this.user.img.name = param.user.img.name
      this.user.img.size = param.user.img.size
    },
    getKind(commodityList){
      this.commodityList = commodityList
    },
    async query(){
            axios({
                url: 'http://localhost:8070/all',
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                },
            }).then((response)=>{
                console.log(response)
                if(response.status == 200){
                    var list = response.data

                    for(var i = 0; i < list.length; i+=5){
                        this.commodityList.push(list.slice(i, i+5))
                    }

                }
            })
        }
  }
  
}
</script>

<style scoped>
#main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  background-color: #d2e9ff; 
}
</style>