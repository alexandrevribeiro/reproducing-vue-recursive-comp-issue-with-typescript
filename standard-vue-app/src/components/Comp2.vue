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
    export default {
        name: 'comp-2',
        props: {
            childComp: Object
        },
        beforeCreate() {
            this.$options.components.Comp1 = require('./Comp1.vue');
        }
    }
</script>
