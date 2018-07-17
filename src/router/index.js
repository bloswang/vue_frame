import Vue from 'vue'
import Router from 'vue-router'


import home from '../components/home.vue'
import one from '../components/menu_bar/one.vue'
import two from '../components/menu_bar/two.vue'
import three from '../components/menu_bar/three.vue'
import four from '../components/menu_bar/four.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '默认显示',
      redirect: '/home/one'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: 'one',
          name: '第一个',
          component: one
        },
        {
          path: 'two',
          name: '第二个',
          component: two
        },
        {
          path: 'three',
          name: '第三个',
          component: three
        },
        {
          path: 'four',
          name: '第四个',
          component: four
        }
        ]
    }
  ]
})
