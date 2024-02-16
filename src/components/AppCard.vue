<script>

    // import variables from store
    import { titles } from '../store/index';

    export default {
        data() {
            return {
                titles,
            }
        },
        props: {
            title: Object,
        },
    }
</script>

<template>
    <div class="debug">
     
            <div>Tipo: {{ title.type }}</div>
            <div>Titolo: {{ title.title }} </div>
            <div>Titolo Originale: {{ title.ogTitle }} </div>
            <div>
            <span>Lingua Originale: {{ title.ogLan + ' '}}</span>
            <span :class="'fi fi-'+titles.getLangFlag(title.ogLan)"></span> 
            </div>
            <div>Voto:
            <font-awesome-icon v-for="i in titles.getStars(title.vote)" icon="fa-solid fa-star" />
            <font-awesome-icon v-for="i in (5 - titles.getStars(title.vote))" icon="fa-regular fa-star" />
            </div>
            <div>Anno di Uscita: {{ title.releaseYear || 'unknown' }}</div>
            <div>
            <img :src="titles.getImgUrl(title.poster)" :alt="title.ogTitle">
            </div>
        
    </div>
</template>

<style lang="scss" scoped>

</style>