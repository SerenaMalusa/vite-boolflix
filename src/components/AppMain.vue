<script>

    // import variables from store
    import { titles } from '../store/index';
    // import components
    import AppCard from './AppCard.vue';

    export default {
        data() {
            return {
                titles,
            }
        },
        components: {
            AppCard,
        },  

    }
</script>

<template>
    <div>

        <div class="p-3">
            <div class="row">

                <app-card 
                v-for="title in titles.titlesList" 
                :key="title.id"
                :title="title"
                class="col-4" />

            </div>
        </div>
       
    </div>
</template>

<style lang="scss" scoped>

</style>