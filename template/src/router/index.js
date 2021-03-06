import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/Layout/Layout'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

/**
 * icon : the icon class show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noredirect` will not redirct in the levelbar
 * noDropdown : if `noDropdown:true` 则没有子菜单
 **/
export const constantRouterMap = [
  { path: '/404', component: _import('404/index'), hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: 'homepage',
    icon: 'home',
    name: 'Home',
    noDropdown: true,
    children: [{ name: '首页', path: 'homepage', component: _import('Homepage/index') }]
  }
]
