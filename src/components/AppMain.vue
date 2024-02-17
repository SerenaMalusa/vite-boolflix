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
                areArrowsVisible: false,
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
            },
            showArrows() {
                this.areArrowsVisible = true;
                setTimeout(() => {
                    this.areArrowsVisible = false;
                }, 1000 * 60);
            },
        },

    }
</script>

<template>
    <div class="text-primary">

        <div v-if="loader.isFirstLoad" class="container">
            <h2 class="mb-3">Benvenuto su Boolflix!</h2>
            <p>Trova i tuoi film e show preferiti usando la barra di ricerca in alto a destra.</p>
        </div>

        <div v-else-if="titles.titlesList.length == 0 && !loader.isLoading" class="container">
            <h2 class="mb-3">Siamo spiacenti. La tua ricerca non ha dato alcun risultato...</h2>
        </div>

        <div v-else class="container">

            <h2 class="mb-3">Ecco i risultati della tua ricerca:</h2>

            <div @mouseenter="showArrows()" class="row flex-nowrap overflow-hidden pb-2">
                
                <div v-for="title in titles.titlesList" class="column">
                
                    <app-card 
                    :key="title.id"
                    :title="title"
                    class="card"
                    />

                </div>                   

            </div>

            <span @click="showNextTitle()" :class="areArrowsVisible ? 'show-arrows' : ''" class="arrowNext">
                    <font-awesome-icon class="text-danger" icon="fa-solid fa-chevron-right" />
            </span>
            <span @click="showPrevTitle()" :class="areArrowsVisible ? 'show-arrows' : ''" class="arrowPrev">
                    <font-awesome-icon class="text-danger" icon="fa-solid fa-chevron-left" />
            </span>

        </div>
       
    </div>
</template>

<style lang="scss" scoped>
    .container {
        padding: 20px 0;
        position: relative;        
            
        .arrowNext ,
        .arrowPrev {
            width: auto;
            font-size: 2.5rem;
            position: absolute;
            top: 50%;
            transform: translate(-150%, -50%);
            opacity: 0;
            transition: opacity 0.5s;
            transition-timing-function: ease-in;
        }
        
        .arrowNext{
            right: 0;
            transform: translate(190%, -50%);
        }
            
        .show-arrows {
                opacity: 1;
        }

        .column {
            width: calc(100% / 3.5);

            .card {
                width: 100%;
                aspect-ratio: 5/7;
            }
            
        }

    }

</style>