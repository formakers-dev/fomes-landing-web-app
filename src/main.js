import Vue from 'vue'
import App from './App.vue'
import VueTypedJs from 'vue-typed-js'
import VueAnalytics from 'vue-analytics'

Vue.use(VueTypedJs);
Vue.use(VueAnalytics, {
    id: 'UA-106038737-1'
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
