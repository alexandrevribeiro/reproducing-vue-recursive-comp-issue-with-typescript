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
    import Comp3 from './Comp3.vue'

    @Component({
        components: {
            Comp1,
            Comp3
        },
        props: {
            childComp: Object
        }
    })
    export default class Comp2 extends Vue { }
</script>
