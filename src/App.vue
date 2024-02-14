<script>

  // import axios
  import axios from 'axios';

  export default {
    data() {
      return {
        MovieList: [],
        title: 'titolo',
      }
    },
    methods: {
      fetchMovieList() {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=875b204ed440a701c5a21db41f3ee0a2&language=it-IT&query=porco rosso')
          .then((res) => {
            this.MovieList = res.data.results;
          });
      },
    },
    created() {
      console.log(this.title);
      this.fetchMovieList();
    },
  }

</script>

<template>

  <h1>{{ title }}</h1>

  <ul>
    <li v-for="movie in MovieList"> {{ movie.title }}</li>
  </ul>
 
</template>

<style lang="scss">

  // import file general.scss
  @use './styles/general.scss';

</style>
