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

    }
</script>

<template>
    <div>

        <div v-if="loader.isFirstLoad" class="container">
            <h2 class="mb-3">Benvenuto su Boolflix!</h2>
            <p>Trova i tuoi film e show preferiti usando la barra di ricerca in alto a destra.</p>
        </div>

        <div v-else class="container">

            <h2 class="mb-3">Ecco i risultati della tua ricerca:</h2>

            <div class="row row-gap-3">
                
                <div v-for="title in titles.titlesList" class="column">
                
                    <app-card 
                    :key="title.id"
                    :title="title"
                    class="card"
                    />

                </div>                

            </div>
        </div>
       
    </div>
</template>

<style lang="scss" scoped>
    .container {
        margin-top: 20px;
        .column {
            width: calc(100% / 5);

            .card {
                width: 100%;
                aspect-ratio: 5/7;
            }
            
        }

    }

</style>