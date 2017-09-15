<template>
    <div>
        <div class="component-test">Component 1</div>        
        <div style="margin-left: 30px;" v-if="childComp" >
            <component :is="childComp.component" :childComp="childComp.child">                
            </component>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import Comp2 from './Comp1.vue'
    import Comp3 from './Comp3.vue'

    @Component({
        name: 'comp-1',
        components: {
            Comp2,
            Comp3
        },
        props: {
            childComp: Object
        }
    })
    export default class Comp1 extends Vue { }
</script>
