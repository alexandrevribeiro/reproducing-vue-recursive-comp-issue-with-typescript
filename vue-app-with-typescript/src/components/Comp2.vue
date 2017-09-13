<template>
    <div>
        <div class="component-test">Component 2 (may have child)</div>        
        <div style="margin-left: 30px;">
            <!-- <component v-if="childComp" :is="childComp.component" ></component> -->
        </div>
    </div>
</template>

<script>        
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import Comp1 from './Comp1.vue'
    import Comp2 from './Comp2.vue'
    import Comp3 from './Comp3.vue'

    @Component({
        components: {
            Comp1,
            Comp2,
            Comp3
        },
        props: {
            childComp: Object
        }
    })
    export default class Comp2 extends Vue { }
</script>
