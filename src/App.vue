<script>

  // import components
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';

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
      AppMain
    },
    created() {
      console.log('hello world');
    },
  }

</script>

<template>
  
  <app-header id="header">

      <!-- <input 
      @keyup.enter="startSearch(searchValue)"
      v-model="searchValue"
      type="text" 
      />
      <button @click="startSearch(searchValue)">Cerca</button> -->

    
  </app-header>
  
  <app-main id="main"/>

  <!-- <div class="container">

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

  </div>   -->
 
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

  #main {
    height: calc(100vh - $header-h);
    background: linear-gradient(to bottom, rgb(65, 65, 68) 0%, rgba(34,34,37,1) 10%, rgba(0,0,11,1) 100%);
  }

</style>
