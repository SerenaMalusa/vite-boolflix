import { reactive } from 'vue';
import axios from 'axios';

export const titles = reactive ({
    movieList: [],
    tvShowList: [],
    titlesList: [],
    movieApiUri: 'https://api.themoviedb.org/3/search/movie?',
    tvShowApiUri: 'https://api.themoviedb.org/3/search/tv?',
    fetchList(apiUri,searchParam) {

        // empty titlesList
        this.titlesList = [];

        // axios api call to the selected API uri
        axios.get(apiUri, {
            // set the parameters
            params: {
                api_key: '875b204ed440a701c5a21db41f3ee0a2',
                language: 'it-IT',
                query: searchParam,
            }
        // when the response is ready add it to titleList    
        }).then((res) => {
            this.addToTitlesList(res.data.results);
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
                    og_title: result.original_title,
                    og_lan: result.original_language,
                    vote: result.vote_average.toFixed(1),
                    release_year: result.release_date.substr(0,4),
                }
            // if it's a serie
            } else if (result.name) {
                return {
                    type: 'Serie',
                    title: result.name,
                    og_title: result.original_name,
                    og_lan: result.original_language,
                    vote: result.vote_average.toFixed(1),
                    release_year: result.first_air_date.substr(0,4),
                }
            }

        });

        // push the mapped results in titlesList
        resultsTitles.forEach((title) => {
            this.titlesList.push(title);
        });

        // sort titlesList by the highest vote
        this.titlesList.sort((a,b) => b.vote - a.vote);

    }
});