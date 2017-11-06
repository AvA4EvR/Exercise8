import Vue from 'vue'
import App from './App.vue'

Vue.filter('append-string', function(value, number) {
    return number + " (" + value + ")";
});

Vue.mixin({
    created() {
        console.log('Global Mixin - Created Hook');
    }
});

new Vue({
    el: '#app',
    render: h => h(App)
})
