<script>

  // import axios
  import axios from 'axios';
  // import the global state
  import { titles } from './store';

  export default {
    data() {
      return {
        titles,
        // MovieList: [], 
        // tvList: [],
        // resultsList: [],       
        searchValue: '',
      }
    },
    methods: {
      // fetchMovieList(param) {
      //   this.resultsList = [],
      //   axios.get('https://api.themoviedb.org/3/search/movie?', {
      //     params: {
      //       api_key: '875b204ed440a701c5a21db41f3ee0a2',
      //       language: 'it-IT',
      //       query: param,
      //     }
      //   }).then((res) => {
      //         this.MovieList = res.data.results;
      //         this.addToResultsList(this.MovieList);
      //     });
      // },

      // addToResultsList(array) {
      //   const foundTitles = array.map((title) => {

      //     if (title.title) {
      //       return {
      //         type: 'Film',
      //         title: title.title,
      //         og_title: title.original_title,
      //         og_lan: title.original_language,
      //         vote: title.vote_average.toFixed(1),
      //         release_year: title.release_date.substr(0,4),
      //       }
      //     } else if (title.name) {
      //       return {
      //         type: 'Serie',
      //         title: title.name,
      //         og_title: title.original_name,
      //         og_lan: title.original_language,
      //         vote: title.vote_average.toFixed(1),
      //         release_year: title.first_air_date.substr(0,4),
      //       }
      //     }

      //   });

      //   foundTitles.forEach((title) => {
      //     this.resultsList.push(title);
      //   });

      //   this.resultsList.sort((a,b) => b.vote - a.vote);

      // },
      
      // fetcTvList(param) {
      //   axios.get('https://api.themoviedb.org/3/search/tv?api_key=875b204ed440a701c5a21db41f3ee0a2&language=it-IT&query='+param)
      //     .then((res) => {
      //         this.tvList = res.data.results;
      //         this.addToResultsList(this.tvList);
      //     });
      // }
    },
    created() {
      // console.log(this.title);
      // this.fetchMovieList();
    },
  }

</script>

<template>

  <input 
  @keyup.enter="titles.fetchList(titles.movieApiUri,searchValue); titles.fetchList(titles.tvShowApiUri,searchValue);" 
  v-model="searchValue"
  type="text" 
  />
  <button 
  @click="titles.fetchList(titles.movieApiUri,searchValue); titles.fetchList(titles.tvShowApiUri,searchValue);"
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
  
    <!-- <div> 
      <h2>Serie</h2>
      <ul v-for="show in tvList">
        <li>Titolo: {{ show.name }} </li>
        <li>Titolo Originale: {{ show.original_name }} </li>
        <li>Lingua Originale: {{ show.original_language }} </li>
        <li>Voto: {{ show.vote_average }}/10</li>
        <li>Anno di Uscita: {{ show.first_air_date.substr(0,4) }}</li>
      </ul>
    </div> -->

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
