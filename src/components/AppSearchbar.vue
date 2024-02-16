<script>

    // import the global state
    import { titles } from '../store';

    export default {
        data() {
            return {
                titles, 
                searchValue: ''
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
    <div>
        <input 
        @keyup.enter="startSearch(searchValue)"
        v-model="searchValue"
        type="text" 
        />
        <button @click="startSearch(searchValue)">Cerca</button>
    </div>
</template>

<style lang="scss" scoped>

    // import varibles and mixins
    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;
    // IMPORT GOOGLE FONT Fjalla One
    @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');

</style>