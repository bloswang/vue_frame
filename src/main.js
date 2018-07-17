import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
/*初始化css*/
import '../src/assets/css/reset.css'
import '../src/assets/css/index.css'

/*axios的配置*/
import $axios from '../config/base.js'
Vue.prototype.$axios = $axios;
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  echarts,
  components: { App },
  template: '<App/>'
})
