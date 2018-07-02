Vue.filter ("capitalise", function (value) {
if (!value) return "";
value = value.toString();
return value.replace(/\b\w/g, function (l) {return l.toUpperCase()});
});

Vue.component("comp-car", {
    data: function () {
        return {
            cars3 : [
                {model : "BMW"},
                {model : "Audi"},
                {model : "Mercedes-Benz AMG"},
                {model : "Ford"},
                {model : "Volvo"},
                {model : "Siat"},
                {model : "Fiat"},
            ],
        }
    },
    template : '<div>' +
    '<div class="car" v-for="(car, i) in cars3">' +
    '<p>{{ car.model }}</p>' +
    '</div>' +
    '</div>'
});

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
        message : "Hello world, hello",
        cars2 : [
            {model : "BMW"},
            {model : "Audi"},
            {model : "Mercedes-Benz AMG"},
            {model : "Ford"},
            {model : "Volvo"},
            {model : "Siat"},
            {model : "Fiat"},
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
        },
        showMess () {
            return this.message.toUpperCase();
        }
    },
    filters : {
        lowercase (value) {
            return value.toLowerCase();
        }
    },
    components : {
        "comp-car" : {
            data: function () {
                return {
                    cars3 : [
                        {model : "BMW"},
                    ],
                }
            },
            template : '<div>' +
            '<div class="car" v-for="(car, i) in cars3">' +
            '<p>{{ car.model }}</p>' +
            '</div>' +
            '</div>'
        }
    }
});

new Vue({
    el : "#app2",
});