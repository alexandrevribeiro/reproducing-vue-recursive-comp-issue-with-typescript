<template>
    <div class="component-test">
        Component 1
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component({
        // name: 'comp-1'
    })
    export default class Comp1 extends Vue { }
</script>
