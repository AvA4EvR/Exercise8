<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <p v-my-directive.count="'blue'">Click Me to turn me BLUE</p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{text | reverseString}}</p>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p>{{text2 | count | append-string(text2, count)}}</p>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>{{string}}</p>
                <p>{{stringAppend}}</p>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <appShared></appShared>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>

    import {sharedMixin} from './sharedMixin'
    import shared from './shared.vue'

    export default {
        data() {
            return{
                text: "Hello there",
                text2: "testers",
                text3: "Hello there",
                text4: "testersMore",
            }
        },


        directives: {
            'my-directive': {
                bind(el, binding, vnode){
//                    let arg = el;
//                    console.log("arg = ", arg);
//                    let value = binding;
//                    console.log("value = ", value);
//                    count();
                    el.addEventListener('click', function() {
                        if(binding.modifiers['count']){
                            var background = binding.value
                            el.style.backgroundColor = background;
                        }
                    })
                }

            }
        },

        filters: {
            reverseString(str){

                var splitString = str.split("");
                var reverseArray = splitString.reverse();
                var joinArray = reverseArray.join("");
                return joinArray;
            },
            count(str){
                return str.length;
            }
        },

        computed: {
            string: function(){
                var splitString = this.text3.split("");
                var reverseArray = splitString.reverse();
                var joinArray = reverseArray.join("");
                return joinArray;
            },

            stringAppend: function() {
                var length = this.text4.length;
                return this.text4 + " (" + length + ")";
            }

        },

        components: {
            appShared: shared
        },
        mixins: [sharedMixin]
    }
</script>

<style>
</style>
