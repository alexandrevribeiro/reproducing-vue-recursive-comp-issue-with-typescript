<template>
  <div id="app">
    <component 
      v-for="(item, index) in comps" :key="index" 
      :is="item.component"
      :childComp="item.child"></component>
  </div>
</template>

<script>

import Comp1 from './components/Comp1.vue'
import Comp2 from './components/Comp2.vue'

export default {
  name: 'app',
  components: {
    Comp1,
    Comp2
  },
  data () {
    return {
      
      /** Components to be rendered */
      comps: [
        { 
          component: "comp-1",
          child: { 
            component: "comp-2",
            child: { 
              component: "comp-1"
            }
          }
        }
      ]
    }
  }
}
</script>

<style>
.component-test {
  border: solid 1px black;
  width: 210px;
  height: 20px;
  padding: 15px;
  margin: 25px;
  font-weight: bold;
}
</style>
