<script>

  // import components
  import AppHeader from './components/AppHeader.vue';
  // import the global state
  import { titles } from './store';

  export default {
    data() {
      return {
        titles,      
        searchValue: '',
      }
    },
    components: {
      AppHeader,
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

  <app-header id="header">
    <div>

      <!-- <input 
      @keyup.enter="startSearch(searchValue)"
      v-model="searchValue"
      type="text" 
      />
      <button @click="startSearch(searchValue)">Cerca</button> -->

    </div>
  </app-header>

  <div class="container">

    <div> 
      <ul v-for="title in titles.titlesList">
        <li>Tipo: {{ title.type }}</li>
        <li>Titolo: {{ title.title }} </li>
        <li>Titolo Originale: {{ title.ogTitle }} </li>
        <li>
          <span>Lingua Originale: {{ title.ogLan + ' '}}</span>
          <span :class="'fi fi-'+titles.getLangFlag(title.ogLan)"></span> 
        </li>
        <li>Voto:
          <font-awesome-icon v-for="i in titles.getStars(title.vote)" icon="fa-solid fa-star" />
          <font-awesome-icon v-for="i in (5 - titles.getStars(title.vote))" icon="fa-regular fa-star" />
        </li>
        <li>Anno di Uscita: {{ title.releaseYear || 'unknown' }}</li>
        <li>
          <img :src="titles.getImgUrl(title.poster)" :alt="title.ogTitle">
        </li>
      </ul>
    </div>

  </div>  
 
</template>

<style lang="scss">

  // import file general.scss
  @use './styles/general.scss';
  // import mixins and variables
  @use './styles/partials/mixins.scss' as *;
  @use './styles/partials/variables.scss' as *;

  #header {
    height: $header-h;
    display: flex;
  }

  .fa-star {
    color: goldenrod;
  }

</style>
