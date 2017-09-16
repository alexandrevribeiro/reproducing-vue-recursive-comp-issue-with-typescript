<template>
    <div>
        <div class="component-test">Component 2</div>        
        <div style="margin-left: 30px;" v-if="childComp" >
            <component :is="childComp.component" :childComp="childComp.child">                
            </component>
        </div>
    </div>
</template>

<script>        
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import Comp1 from './Comp1.vue'

    @Component({
        name: 'comp-2',
        components: {
            Comp1
        },
        props: {
            childComp: Object
        }
    })
    export default class Comp2 extends Vue { 
        // beforeCreate() {
        //     this.$options.components.Comp1 = require('./Comp1.vue');
        // }
    }
</script>
