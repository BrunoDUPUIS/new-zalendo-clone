import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faShoppingBag, faStarHalfAlt, faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faHeart, faShoppingBag, faStar, faStarHalfAlt)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
