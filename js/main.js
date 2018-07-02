new Vue({
    el : "#app",
    data : {
        title : "Hello World!",
        styleCSS : "",
        value : 1,
        // doubleValue : 1,
        show : true,
        cars : [
            {model : "BMW", speed : 250.8},
            {model : "Audi", speed : 240.21},
            {model : "Mercedes-Benz AMG", speed : 350.4},
            {model : "Ford", speed : 160.5},
        ],
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