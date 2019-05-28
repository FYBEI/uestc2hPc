<!-->u2pc首页总组件，包含了背景、两种用户登录框、种类选择栏、内容、底部页码<-->
<template>
  <div id="main">
    <background/>
    <div v-if="login">
      <user/>
    </div>
    <div v-if="!login">
      <unloginUser/>
    </div>

    <router-view/>
    <tabbar/>
    <mycontent/>
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

export default {
  name: 'MainContent',
  components: {
    unloginUser: unloginUser,
    user: user,
    tabbar: tabbar,
    mycontent: mycontent,
    pagenation: pagenation,
    background: background
  },
  data() {
    return {
      login: true
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