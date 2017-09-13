<template>
    <div>
        <div class="component-test">Component 2 (may have child)</div>        
        <div style="margin-left: 30px;">
            <component v-if="childComp" :is="childComp.component" ></component>
        </div>
    </div>
</template>

<script>    
    import Comp1 from './Comp1.vue'
    import Comp2 from './Comp2.vue'
    import Comp3 from './Comp3.vue'

    export default {
        name: 'comp-2',
        components: {
            Comp1,
            Comp2,
            Comp3
        },
        props: {
            childComp: Object
        }
    }
</script>
