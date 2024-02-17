<script>

    // import variables from store
    import { titles, loader } from '../store/index';
    // import components
    import AppCard from './AppCard.vue';

    export default {
        data() {
            return {
                titles,
                loader,
            }
        },
        components: {
            AppCard,
        },  
        methods: {
            showNextTitle() {
                titles.titlesList.push(titles.titlesList[0]);
                titles.titlesList.shift();
                // console.log(titles.titlesList);
            },
            showPrevTitle() {
                titles.titlesList.unshift(titles.titlesList.at(-1));
                titles.titlesList.pop();
            }  
        },

    }
</script>

<template>
    <div class="text-primary">

        <div v-if="loader.isFirstLoad" class="container">
            <h2 class="mb-3">Benvenuto su Boolflix!</h2>
            <p>Trova i tuoi film e show preferiti usando la barra di ricerca in alto a destra.</p>
        </div>

        <div v-else class="container">

            <h2 class="mb-3">Ecco i risultati della tua ricerca:</h2>

            <div class="row flex-nowrap overflow-hidden pb-2">
                
                <div v-for="title in titles.titlesList" class="column">
                
                    <app-card 
                    :key="title.id"
                    :title="title"
                    class="card"
                    />

                </div>   
                
                <span @click="showNextTitle()" class="arrowNext">
                    <font-awesome-icon class="text-danger" icon="fa-solid fa-chevron-right" />
                </span>
                <span @click="showPrevTitle()" class="arrowPrev">
                    <font-awesome-icon class="text-danger" icon="fa-solid fa-chevron-left" />
                </span>

            </div>
        </div>
       
    </div>
</template>

<style lang="scss" scoped>
    .container {
        padding: 20px 0;

        .row{
            position: relative;

            
            .arrowNext ,
            .arrowPrev {
                width: 50px;
                font-size: 2.5rem;
                position: absolute;
                top: 50%;
                transform: translate(-25%, -50%);
                opacity: 0;
                transition: opacity 0.5s;
                transition-timing-function: ease-in;
            }
            
            .arrowNext{
                right: 0;
                transform: translate(25%, -50%);
            }
            
            &:hover {
                .arrowNext,
                .arrowPrev {
                    opacity: 1;
                }
            }

            .appear-on-click {
                opacity: 1;
            }

            .column {
                width: calc(100% / 5);
    
                .card {
                    width: 100%;
                    aspect-ratio: 5/7;
                }
                
            }
        }

    }

</style>