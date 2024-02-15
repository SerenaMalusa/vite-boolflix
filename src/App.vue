<script>

  // import axios
  import axios from 'axios';
  // import the global state
  import { titles } from './store';

  export default {
    data() {
      return {
        titles,      
        searchValue: '',
      }
    },
  }

</script>

<template>

  <input 
  @keyup.enter="titles.fetchTitles('apiUri',searchValue);" 
  v-model="searchValue"
  type="text" 
  />
  <button 
  @click="titles.fetchTitles(titles.movieApiUri,searchValue); titles.fetchTitles(titles.tvShowApiUri,searchValue);"
  >
  Cerca
  </button>

  <div class="container">

    <div> 
      <ul v-for="title in titles.titlesList">
        <li>Tipo: {{ title.type }}</li>
        <li>Titolo: {{ title.title }} </li>
        <li>Titolo Originale: {{ title.og_title }} </li>
        <li>Lingua Originale: {{ title.og_lan }} </li>
        <li>Voto: {{ title.vote }}/10</li>
        <li>Anno di Uscita: {{ title.release_year }}</li>
      </ul>
    </div>

  </div>  
 
</template>

<style lang="scss">

  // import file general.scss
  @use './styles/general.scss';

  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    div {
      width: 50%;
    }
  }

</style>
