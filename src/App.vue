<script>

  // import axios
  import axios from 'axios';

  export default {
    data() {
      return {
        MovieList: [],
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
    },
    created() {
      // console.log(this.title);
      // this.fetchMovieList();
    },
  }

</script>

<template>

  <input type="text" v-model="searchValue"/>
  <button @click="fetchMovieList(searchValue)">Cerca</button>


  <div v-for="movie in MovieList"> 
    <ul>
      <li>Titolo: {{ movie.title }} </li>
      <li>Titolo Originale: {{ movie.original_title }} </li>
      <li>Lingua Originale: {{ movie.original_language }} </li>
      <li>Voto: {{ movie.vote_average }}/10</li>
    </ul>
  </div>
  
 
</template>

<style lang="scss">

  // import file general.scss
  @use './styles/general.scss';

</style>
