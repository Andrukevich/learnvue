new Vue({
    el : "#app",
    data : {
        title : "Hello World!",
        styleCSS : "",
        value : 1,
        // doubleValue : 1,
    },
    methods : {
        changeText () {
            this.title = "someting new text";
        },
        increment (value) {
            this.value = value;
            // this.doubleValue = value * 2;
            // this.doubleValue = this.value * 2;
            if (value == 25) {
                alert("Number equal 25");
            }
        }
    },
    computed : {
        doubleValue () {
            return this.value * 2;
        }
    }
});