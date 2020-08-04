import Vue from 'vue'
import App from './App.vue'
import router from './krouter'


new Vue({
  // 方便在组件中使用
  router,
  render: h => h(App)
}).$mount('#app')
