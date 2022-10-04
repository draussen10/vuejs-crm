import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import Paginate from 'vuejs-paginate'
import VueMeta from 'vue-meta'


import router from './router'
import store from './store'

import dateFilter from './filter/date.filter'
import currencyFilter from './filter/currentcy.filter'
import localizeFilter from './filter/localize.filter'
import tooltipDirective from './directives/tooltip.directive'
import messagePlugin from '@/utils/message.plagin'
import valutePlugin from '@/utils/valute.plugin'

import Loader from '@/components/app/Loader'

import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'


import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'



Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.use(valutePlugin)
Vue.use(VueMeta)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)



firebase.initializeApp({
  apiKey: "AIzaSyBDnnkb6rx_fhGxWh9JHgoP7dkDTCeTobE",
  authDomain: "draussen-vue-crm.firebaseapp.com",
  projectId: "draussen-vue-crm",
  storageBucket: "draussen-vue-crm.appspot.com",
  messagingSenderId: "1053660353456",
  appId: "1:1053660353456:web:e5e2a139404bac411c3c75",
  measurementId: "G-RWTE2EX76S"
})

let app

firebase.auth().onAuthStateChanged(() => {
	if(!app) {
		app = new Vue({
			router,
			store,
			render: h => h(App)
		}).$mount('#app')
	}
})