import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () => import( /* webpackChunkName: "about" */ '../views/Home.vue')
    }, {
        path: '/classify',
        name: 'Classify',
        component: () => import( /* webpackChunkName: "about" */ '../views/Classify.vue')
    },

    {
        path: '/shopcart',
        name: 'Shopcart',
        component: () => import('../views/ShopCart.vue')
    },
    {
        path: '/detail',
        name: 'Detail',
        component: () => import('../views/Detail.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router