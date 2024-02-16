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
            startSearch() {

                // empty the arrays
                titles.titlesList = [];
                titles.movieList = [];
                titles.tvShowList = [];

                // split the value by the spaces
                const valueWords = this.searchValue.trim().split(' ');
                // console.log(valueWords);

                // if the user did not write anything or they wrote only spaces
                if (!this.searchValue || valueWords[0] == '' && valueWords.length == 1) {
                // do nothing
                return;
                };
                
                // start the research of movies and series
                titles.fetchTitles(titles.movieEndPoint,this.searchValue);
                titles.fetchTitles(titles.tvShowEndPoint,this.searchValue);

            },
        },
    }
</script>

<template>
    <div>
        <input 
        @keyup.enter="startSearch()"
        v-model="searchValue"
        type="text" 
        />
        <button @click="startSearch()">Cerca</button>
    </div>
</template>

<style lang="scss" scoped>

    // import varibles and mixins
    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;
 
    input {
        width: 400px;
    }

</style>