/**** last build at Sat Sep 30 2017 14:54:46 GMT+0800 (CST)****/
import Vue from 'vue';

var App = { render: function () {
    var _vm = this;return _vm._m(0);
  }, staticRenderFns: [function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { attrs: { "id": "vc-test" } }, [_c('p', [_vm._v("I am new here")])]);
  }],
  name: 'vc-test'
};

// const Vue = require('vue')
Vue.config.productionTip = false;

new Vue({
  // el: '#container',
  // template: '<App />',
  // components: { App }
  render: create => create(App)
}).$mount('#container');
