<template>
    <div class="example">
        <h1>Start text!</h1>
        <app-input></app-input>
    </div>
</template>

<script>
    import Input from './components/Field.vue'

    export default {
        components: {
            "app-input": Input
        }
    }
</script>