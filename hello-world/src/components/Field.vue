<template xmlns:v-model="http://www.w3.org/1999/xhtml">
    <div>
        <input type="text" v-model="mess">
        <p>{{ mess }}</p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                mess: "DEFAULT"
            }
        }
    }
</script>