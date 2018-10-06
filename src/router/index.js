import Vue from 'vue'
import Router from 'vue-router'
import imgZoom from '@/components/imgZoom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'imgZoom',
      component: imgZoom
    }
  ]
})
