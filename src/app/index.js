import Vue from 'vue'
import router from './router'
import App from './App.vue'

export function start (params) {
  window.DEBUG = params ? !!params.debug : false

  if (window.DEBUG) {
    console.log('Application start in DEBUG mode')
  }

  console.log('Init application in element #app')
  Vue.config.productionTip = false

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<app/>'
  })
}
