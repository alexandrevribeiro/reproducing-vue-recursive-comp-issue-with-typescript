<template>
  <div id="app">
    <component 
      v-for="(item, index) in comps" :key="index" 
      :is="item.component"
      :childComp="item.child"></component>
  </div>
</template>

<script lang="ts">

  import Vue from 'vue'
  import Component from 'vue-class-component'
  const Comp1 = () => import('./components/Comp1.vue')
  const Comp2 = () => import('./components/Comp2.vue')

  @Component({
    components: {
        Comp1,
        Comp2
      }
  })
  export default class App extends Vue { 

    /** Components to be rendered */
    comps = [
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
