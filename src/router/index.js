import Vue from 'vue'
import Router from 'vue-router'

// 前台頁面
import Home from '@/components/Home/Home'
import Detail from '@/components/Detail/Detail'


// 后台頁面
import adminList from '@/admin/List/List'
import adminHome from '@/admin/Home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/adminList',
      name: 'adminList',
      component: adminList
    },
    {
      path: '/adminHome',
      name: 'adminHome',
      component: adminHome
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
