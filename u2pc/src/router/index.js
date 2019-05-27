import Vue from 'vue'
import Router from 'vue-router'
import MainContent from '@/components/MainContent'
import Detail from '@/components/Detail'
import UserDetail from '@/components/UserDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainContent',
      component: MainContent
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/user',
      name: 'UserDetail',
      component: UserDetail
    }
  ]
})
