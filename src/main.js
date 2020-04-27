import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery'
import {fb} from './firebase'
import VueFirestore from 'vue-firestore'
import Swal from 'sweetalert2'

require('firebase/firestore');

Vue.use(VueFirestore, {
    key: 'id',         // the name of the property. Default is '.key'.
    enumerable: true  //  whether it is enumerable or not. Default is true.
});

Vue.use(VueFirestore);

window.$ = window.jQuery = jQuery;

import 'popper.js'
import 'bootstrap'
import './assets/app.scss'

// window.Swal = Swal;
Vue.prototype.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

// window.Toast = Toast;
Vue.prototype.Toast = Toast;

Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.component('products-list', require('./sections/ProductList.vue').default);

Vue.config.productionTip = false;

let app = '';
fb.auth().onAuthStateChanged(function() {
    if (!app) { 
        new Vue({
            router,
            render: h => h(App),
        }).$mount('#app')
    }
  });
  