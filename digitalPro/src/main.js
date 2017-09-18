// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import DetailAnaPage from './pages/detail/analysis'
import DetailCouPage from './pages/detail/count'
import DetailForPage from './pages/detail/forecast'
import DetailPubPage from './pages/detail/publish'

// import App from './App'
// import router from './router'

// Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

let router = new VueRouter({
    mode: 'history', // 使用模式为h5的history模式
    routes: [
        { // map
            path: '/',
            component: IndexPage
        },
        {
            path: '/detail',
            component: DetailPage,
            redirect: '/detail/analysis',
            children: [
                {
                    path: 'analysis',
                    component: DetailAnaPage
                },
                {
                    path: 'count',
                    component: DetailCouPage
                },
                {
                    path: 'forecast',
                    component: DetailForPage
                },
                {
                    path: 'publish',
                    component: DetailPubPage
                }
            ]
        }
    ]
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    // template: '<App/>',
    // components: { App }
    template: '<Layout/>',
    components: { Layout }
})