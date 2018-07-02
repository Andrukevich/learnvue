<template>
    <div class="example">
        <h1>{{ message }}</h1>
        <app-input :msg="message" @messChange="message = $event"></app-input>
    </div>
</template>

<script>
    import Input from './components/Field.vue'

    export default {
        data: function () {
            return {
                message: "Simple Text!!!XXX@@@"
            }
        },
        components: {
            "app-input": Input
        }
    }
</script>