import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({

  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),

  routes: [
    { path: '/ilustraciones',
      component: load('templatebars'),
      children: [
        {
          path: 'newsfeed',
          component: load('newsfeed')
        },
        {
          path: 'myartworks',
          component: load('myartworks')
        },
        {
          path: 'transaction',
          component: load('transaction')
        },
        {
          path: 'bidding',
          component: load('Bidding')
        }
      ]
    },
    { path: '/login', component: load('login') },
    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})
