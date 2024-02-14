<script>

  // import axios
  import axios from 'axios';

  export default {
    data() {
      return {
        MovieList: [], 
        tvList: [],       
        searchValue: '',
      }
    },
    methods: {
      fetchMovieList(param) {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=875b204ed440a701c5a21db41f3ee0a2&language=it-IT&query='+param)
          .then((res) => {
              this.MovieList = res.data.results;
          });
      },
      
      fetcTvList(param) {
        axios.get('https://api.themoviedb.org/3/search/tv?api_key=875b204ed440a701c5a21db41f3ee0a2&language=it-IT&query='+param)
          .then((res) => {
              this.tvList = res.data.results;
          });
      }
    },
    created() {
      // console.log(this.title);
      // this.fetchMovieList();
    },
  }

</script>

<template>

  <input type="text" v-model="searchValue"/>
  <button @click="fetchMovieList(searchValue); fetcTvList(searchValue);">Cerca</button>

  <div class="container">

    <div> 
      <h2>Film</h2>
      <ul v-for="movie in MovieList">
        <li>Titolo: {{ movie.title }} </li>
        <li>Titolo Originale: {{ movie.original_title }} </li>
        <li>Lingua Originale: {{ movie.original_language }} </li>
        <li>Voto: {{ movie.vote_average }}/10</li>
        <li>Anno di Uscita: {{ movie.release_date.substr(0,4) }}</li>
      </ul>
    </div>
  
    <div> 
      <h2>Serie</h2>
      <ul v-for="show in tvList">
        <li>Titolo: {{ show.name }} </li>
        <li>Titolo Originale: {{ show.original_name }} </li>
        <li>Lingua Originale: {{ show.original_language }} </li>
        <li>Voto: {{ show.vote_average }}/10</li>
        <li>Anno di Uscita: {{ show.first_air_date.substr(0,4) }}</li>
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
