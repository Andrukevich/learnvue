<template xmlns:v-model="http://www.w3.org/1999/xhtml">
    <div>
        <h3>{{ msg }}</h3>
        <input type="text" v-model="mess">
        <p>{{ mess }}</p>
        <input type="text" :value="msg">
        <br>
        <br>
        <input type="text" :value="msg" @input="changeMess">
    </div>
</template>

<script>

    export default {
        props: ["msg"],
        data () {
            return {
                mess: "DEFAULT"
            }
        },
        methods: {
            changeMess (event) {
                this.mess = event.target.value;
                this.$emit("messChange", this.mess);
            }
        }
    }
</script>