import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name:'home',
            redirect:'/index',
            component: () => import('./../view/home'),
            children: [
                {
                    path:'/index',
                    name:'index',
                    component: () => import('./../view/index'),
                }
            ]
        }
    ]
})