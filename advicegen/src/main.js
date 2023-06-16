import { createApp } from 'vue'
import App from './App.vue'
import './assets/App.css'
import './assets/Random.css'
import './assets/ID.css'



import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHtml5, faCss3,faVuejs,faLinkedin,faGithub,faSquareJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';


library.add(faHtml5, faCss3,faVuejs,faLinkedin, faDatabase,faGithub,faSquareJs);





createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
