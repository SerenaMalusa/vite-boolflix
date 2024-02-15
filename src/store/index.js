import { reactive } from 'vue';
// import axios
import axios from 'axios';

// all things related to the searched titles
export const titles = reactive ({

    // arrays for the search results
    movieList: [],
    tvShowList: [],
    titlesList: [],

    // API endpoints
    movieApiUri: 'https://api.themoviedb.org/3/search/movie?',
    tvShowApiUri: 'https://api.themoviedb.org/3/search/tv?',

    // function that calls the API with axios
    fetchTitles(apiUri,searchParam) {

        // empty the arrays
        this.titlesList = [];
        this.movieList = [];
        this.tvShowList = [];

        // axios api call to the selected API uri
        axios.get(apiUri, {

            // set the parameters
            params: {
                api_key: '875b204ed440a701c5a21db41f3ee0a2',
                language: 'it-IT',
                query: searchParam,
            }

        // when the response is ready     
        }).then((res) => {

            // add it to titleList
            this.addToTitlesList(res.data.results);

            // add it to the array related to your research
            if (apiUri.includes('movie?')) this.movieList = res.data.results;
            if (apiUri.includes('tv?')) this.tvShowList = res.data.results;

        })
        .catch((error) => {
            console.log(error);
            alert('Server error');
        });
    },

    // function to add the results of the call to titleList
    addToTitlesList(results) {
        
        // map the result array so the objects will all have the same keys
        const resultsTitles = results.map((result) => {

            // if it'a a movie
            if (result.title) {
                return {
                    type: 'Film',
                    title: result.title,
                    ogTitle: result.original_title,
                    ogLan: result.original_language,
                    ogCountry: result.origin_country,
                    vote: result.vote_average.toFixed(1),
                    releaseYear: result.release_date.substr(0,4),
                    backdrop: result.backdrop_path,
                    poster: result.poster_path,
                }

            // if it's a serie
            } else if (result.name) {
                return {
                    type: 'Serie',
                    title: result.name,
                    ogTitle: result.original_name,
                    ogLan: result.original_language,
                    vote: result.vote_average.toFixed(1),
                    releaseYear: result.first_air_date.substr(0,4),
                    backdrop: result.backdrop_path,
                    poster: result.poster_path,
                }
            }

        });

        // push the mapped results in titlesList
        resultsTitles.forEach((title) => {
            this.titlesList.push(title);
        });

        // sort titlesList by the highest vote
        this.titlesList.sort((a,b) => b.vote - a.vote);

    },
    // function to get the flag that corresponds to the original language
    getLangFlag(ogLang) {

        // handle the differences with the library
        if (ogLang == 'en') return 'gb';
        if (ogLang == 'ja') return 'jp';
        if (ogLang == 'ko') return 'kr';
        // console.log(ogLang);

        // or just return the og_lang value
        return ogLang;

    },

    getImgUrl(imgUrl) {
        const url = new URL ( 'https://image.tmdb.org/t/p/' + 'w342' + imgUrl , import.meta.url);
        return url;
    }
});