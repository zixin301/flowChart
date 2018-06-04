import Vue from 'vue'
import Router from 'vue-router'
import OperationView from '../views/OperationView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OperationView',
      component: OperationView
    }
  ]
})
