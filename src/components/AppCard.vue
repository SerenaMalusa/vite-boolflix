<script>

    // import variables from store
    import axios from 'axios';
    import { titles, loader } from '../store/index';

    export default {
        data() {
            return {
                titles,
                loader,
                cast: [],
            }
        },
        props: {
            title: Object,
        },
        methods: {
            // function to do an axios call to find the first 5 actors
            fetchActors() {
                // if it's a movie
                if (this.title.type == 'Movie') {
                    //axios call with movie endpoint and id
                    axios.get('https://api.themoviedb.org/3/movie/'+ this.title.id +'/credits', {
                        params: {
                            api_key: '875b204ed440a701c5a21db41f3ee0a2',
                            language: 'it-IT',
                        }
                    }).then((res) => {                    
                        const result = res.data.cast;   
                        console.log(this.title.title, result);
                        // cicle the first 5 and push them in cast
                        if (result.length > 0 ) {
                            for (let i = 0; i < 5; i++) {
                                this.cast.push(result[i].name);
                            };
                        };
                    })

                // if it's a show
                } else if (this.title.type == 'Show') {
                    // axios call with show endpoint and id
                    axios.get('https://api.themoviedb.org/3/tv/'+ this.title.id +'/credits', {
                        params: {
                            api_key: '875b204ed440a701c5a21db41f3ee0a2',
                            language: 'it-IT',
                        }
                    }).then((res) => {                    
                        const result = res.data.cast;
                        if (result.length > 0 ) {
                            // cicle the first 5 and push them in cast
                            for (let i = 0; i < 5; i++) {
                                this.cast.push(result[i].name);
                            };
                        };
                    })

                }
            }
        },
        mounted() {
            //call funtion to find first 5 actors names
            this.fetchActors();
        },
    }
</script>

<template>
    <div>

        <figure>
            <img v-if="title.poster" :src="titles.getImgUrl(title.poster)" :alt="title.ogTitle">
            <div v-else class="text-center text-primary bg-dark p-1">
                <h3>{{ title.title }}</h3>
                <font-awesome-icon icon="fa-solid fa-film" class="icon"/>
            </div>
        </figure>

        <div class="card-content p-2 text-info">

            <div class="card-title">{{ title.type }}</div>
            <div class="card-title">{{ title.title }} </div>
            <div>
                <span class="me-2">Lingua Originale: {{ title.ogLan }}</span>
                <span :class="'fi fi-'+titles.getLangFlag(title.ogLan)"></span> 
            </div>
            <div v-if="title.title != title.ogTitle">Titolo Originale: {{ title.ogTitle }} </div>
            <div>Anno di Uscita: {{ title.releaseYear || 'unknown' }}</div>
            <div>Voto:
                <font-awesome-icon v-for="i in titles.getStars(title.vote)" icon="fa-solid fa-star" />
                <font-awesome-icon v-for="i in (5 - titles.getStars(title.vote))" icon="fa-regular fa-star" />
            </div>
            <hr class="text-primary my-1" />
            <div class="card-overview">
            <div class="cast mb-1">
                Cast:
                <span v-for="(actor,i) in cast">{{ (i != cast.length - 1) ? actor+', ' : actor+'...' }}</span>
            </div>
                <p>{{ title.overview }}</p>
            </div>

        </div>     
        
    </div>
</template>

<style lang="scss" scoped>

    // import mixins and variables
    @use '../styles/partials/mixins.scss' as *;
    @use '../styles/partials/variables.scss' as *;

    .card {
        position: relative;

        figure {
            opacity: 1;
            transition: opacity 2s;
            transition-timing-function: ease;
        }

        .card-content{
            opacity: 0;
            transition: opacity 2s;
            transition-timing-function: ease;
        }

        &:hover {
            figure {
                opacity: 0;
            }

            .card-content {
                opacity: 1;
            }
        }

        figure {
            width: 100%;
            height: 100%;
            
            position: absolute;
                
            img {
                object-fit: cover;
            }
    
            img,
            div {
                width: 100%;
                height: 100%;            
            }
    
            div {
                font-size: 1.5rem;
    
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: calc($base-space * 4);
    
                .icon {
                    font-size: 4rem;
                }
            }
            
        }
    
        .card-content {
            border: 1px solid red;
            width: 100%;
            height: 100%;
    
            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            .card-title {
                font-size: 1.2rem;
            }

            .fa-star {
                color: goldenrod;
            }

            .card-overview {
                white-space: wrap;
                overflow: auto;
            }
        }
        
    }


</style>