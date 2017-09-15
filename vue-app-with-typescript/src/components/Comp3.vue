<template>
    <div>
        <div class="component-test">Component 3</div>        
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
    import Comp2 from './Comp3.vue'

    @Component({
        name: 'comp-3',
        components: {
            Comp1,
            Comp2
        },
        props: {
            childComp: Object
        }
    })
    export default class Comp3 extends Vue { }
</script>
