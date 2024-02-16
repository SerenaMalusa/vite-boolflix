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

        <figure>
            <img v-if="title.poster" :src="titles.getImgUrl(title.poster)" :alt="title.ogTitle">
            <div v-else class="text-center text-primary bg-dark p-1">
                <h3>{{ title.title }}</h3>
                <font-awesome-icon icon="fa-solid fa-film" class="icon"/>
            </div>
        </figure>

        <div class="card-content text-center debug">

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

        </div>
     
        
    </div>
</template>

<style lang="scss" scoped>

    figure {
        width: 100%;
        height: 100%;

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
            justify-content: space-around;

            .icon {
                font-size: 4rem;
            }
        }
        
    }

    .card-content {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

</style>