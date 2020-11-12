import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: () =>
                import ('./views/DL.vue'),
        },
        {
            path: '/gg',
            component: () =>
                import ('./views/Gg.vue'),
            children: [{
                    path: '/gg',
                    component: () =>
                        import ('./views/Hylb.vue'),
                },
                {
                    path: '/spfl',
                    component: () =>
                        import ('./views/Spfl.vue'),
                }
            ]
        }
    ]
})