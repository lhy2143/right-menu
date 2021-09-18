import Vue from 'vue';
import App from './app.vue';
import rightMenu from 'right-menu';
import clickOutside from './clickOutside';
Vue.directive('rightMenu', rightMenu);
Vue.directive('clickOutside', clickOutside);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: (h) => h(App),
});
