import Vue from 'vue'
import App from './App.vue'

/*
-> ERROR ALSO OCCURRING WHEN REGISTERING THE COMPS GLOBALLY

import Comp1 from './components/Comp1.vue'
import Comp2 from './components/Comp2.vue'
import Comp3 from './components/Comp3.vue'

Vue.component('comp-1', Comp1);
Vue.component('comp-2', Comp2);
Vue.component('comp-3', Comp3);
*/

new Vue({
  el: '#app',
  render: h => h(App)
})
