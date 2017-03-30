import Vue from 'vue'
import Router from 'vue-router'

// 前台頁面
import Home from '@/components/Home/Home'
import Detail from '@/components/Detail/Detail'


// 后台頁面
import adminList from '@/admin/List/List'
import adminHome from '@/admin/Home/Home'
import adminChang from '@/admin/Chang/Chang'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail/:id',
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
        path:'/adminChang/:id',
        name:'adminChang',
        component:adminChang
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
