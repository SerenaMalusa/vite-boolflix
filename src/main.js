import { createApp } from 'vue'

import App from './App.vue';
// import flag library (flag-icons)
import "flag-icons/css/flag-icons.min.css";
// import fontAwsome
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* import specific icons from the solid kit */
import { faStar } from '@fortawesome/free-solid-svg-icons';
/* add icons to the library */
library.add(faStar);

const app = createApp(App);
app.component('font-awesome-icon',FontAwesomeIcon);
app.mount('#app');
