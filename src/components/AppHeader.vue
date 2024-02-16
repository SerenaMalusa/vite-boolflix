<script>

    // import components
    import AppSearchbar from './AppSearchbar.vue';
    
    export default {
        components: {
            AppSearchbar,
        }
    }
</script>

<template>
    <div class="px-3 d-flex justify-content-between align-items-center">

        <div class="logo text-uppercase">Boolflix</div>

        <app-searchbar />

        <!-- <slot></slot> -->
    </div>
</template>

<style lang="scss" scoped>

// import varibles and mixins
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;
// IMPORT GOOGLE FONT Fjalla One
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');

div {

    background-color: black;
    .logo {
      font-family: "Fjalla One", sans-serif;
      font-size: 2rem;
      font-weight: 600;
      font-style: normal;
      color: red;
    }

}

</style>