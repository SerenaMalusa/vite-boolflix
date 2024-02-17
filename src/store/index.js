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
    movieEndPoint: 'https://api.themoviedb.org/3/search/movie?',
    tvShowEndPoint: 'https://api.themoviedb.org/3/search/tv?',

    // function that calls the API with axios
    fetchTitles(endPoint,searchParam) {

        // empty the arrays
        this.titlesList = [];
        this.movieList = [];
        this.tvShowList = [];

        // axios api call to the selected API uri
        axios.get(endPoint, {

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
            if (endPoint.includes('movie?')) this.movieList = res.data.results;
            if (endPoint.includes('tv?')) this.tvShowList = res.data.results;

        })
        .catch((error) => {

            // this.error = {
            //     status: true,
            //     message: 'Server error',
            // }
            // console.log(error);
            // alert(this.error.message);
        });
    },

    // function to add the results of the call to titleList
    addToTitlesList(results) {
        
        // map the result array so the objects will all have the same keys
        const resultsTitles = results.map((result) => {

            // if it'a a movie
            if (result.title) {
                return {
                    type: 'Movie',
                    id: result.id,
                    title: result.title,
                    ogTitle: result.original_title,
                    ogLan: result.original_language,
                    ogCountry: result.origin_country,
                    vote: result.vote_average.toFixed(1),
                    releaseYear: result.release_date.substr(0,4),
                    backdrop: result.backdrop_path,
                    poster: result.poster_path,
                    overview: result.overview,
                }

            // if it's a serie
            } else if (result.name) {
                return {
                    type: 'Show',
                    id: result.id,
                    title: result.name,
                    ogTitle: result.original_name,
                    ogLan: result.original_language,
                    vote: result.vote_average.toFixed(1),
                    releaseYear: result.first_air_date.substr(0,4),
                    backdrop: result.backdrop_path,
                    poster: result.poster_path,
                    overview: result.overview,
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
        if (ogLang == 'zh') return 'cn';
        // console.log(ogLang);

        // or just return the og_lang value
        return ogLang;

    },
    // function that creates the dynamic url for the images
    getImgUrl(imgUrl) {
        const imgSize = 'w342';
        return new URL ( 'https://image.tmdb.org/t/p/' + imgSize + imgUrl , import.meta.url);  
    },

    getStars(vote) {
        return Math.round(parseFloat(vote) / 2);
    }
});


export const loader = reactive ({
    // switch variables that changes the content of AppMain
    isFirstLoad: true,
});