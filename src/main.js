import Vue from 'vue'
import App from './App.vue'
import VueTypedJs from 'vue-typed-js'
import VueGtag from 'vue-gtag'

Vue.use(VueTypedJs);
Vue.use(VueGtag, {
    config: {
        id: 'UA-106038737-1'
    }
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
