

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';




require('./bootstrap');

window.Vue = require('vue');



Vue.component('frontend', require('./components/ExampleComponent.vue').default);



const app = new Vue({
    el: '#app',
});
