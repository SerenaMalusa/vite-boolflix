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
    methods: {
      // function that starts the research and handle the digitation's errors
      startSearch(value) {

        // empty the arrays
        titles.titlesList = [];
        titles.movieList = [];
        titles.tvShowList = [];

        // split the value by the spaces
        const valueWords = value.trim().split(' ');
        // console.log(valueWords);

        // if the user did not write anything or they wrote only spaces
        if (!value || valueWords[0] == '' && valueWords.length == 1) {
          // do nothing
          return;
        };

        // start the research of movies and series
        titles.fetchTitles(titles.movieApiUri,value);
        titles.fetchTitles(titles.tvShowApiUri,value);

      },
    },
  }

</script>

<template>

  <input 
  @keyup.enter="startSearch(searchValue)"
  v-model="searchValue"
  type="text" 
  />
  <button @click="startSearch(searchValue)">Cerca</button>

  <div class="container">

    <div> 
      <ul v-for="title in titles.titlesList">
        <li>Tipo: {{ title.type }}</li>
        <li>Titolo: {{ title.title }} </li>
        <li>Titolo Originale: {{ title.og_title }} </li>
        <li>
          <span>
            Lingua Originale: {{ title.og_lan + ' '}} 
          </span>
          <span :class="'fi fi-'+titles.getLangFlag(title.og_lan)"></span> 
        </li>
        <li>Voto: {{ title.vote }}/10</li>
        <li>Anno di Uscita: {{ title.release_year || 'unknonw' }}</li>
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
