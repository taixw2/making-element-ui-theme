import Vue from 'vue'
import ElementUI from 'element-ui'
import './theme/index.css'
import 'normalize.css'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router'
import routes from './routes'

import "./assets/style.css";

Vue.use(ElementUI)
Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes,
    scrollBehavior(to, from, savePosition) {
        return savePosition ? savePosition : {
            x: 0,
            y: 0
        };
    }
});


const app = new Vue({
    el: "#app",
    router,
    http: {
        root: '/api',
        headers: {
            // Authorization: 'Basic YXBpOnBhc3N3b3Jk'
        },
        options : {
          emulateJSON  :  true
        }
    },
    render: h => h(App)
});
