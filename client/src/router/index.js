import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import addpost from '@/components/AddPost'
import editpost from '@/components/EditPost'
import transactions from '@/components/Transactions'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/add',
      component: addpost,
      name: 'addpost'
    },
    {
      path: '/posts/:id/edit',
      component: editpost,
      name: 'editpost'
    },
    {
      path: '/transactions',
      component: transactions,
      name: 'transactions'
    }
  ]
})
