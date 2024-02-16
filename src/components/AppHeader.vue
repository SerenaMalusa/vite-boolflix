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
    <div class="bg-secondary">
        <div class="container">
    
            <div class="logo text-uppercase text-primary">Boolflix</div>
    
            <app-searchbar />
    
            <!-- <slot></slot> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>

// import varibles and mixins
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;
// IMPORT GOOGLE FONT Fjalla One
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .logo {
      font-size: 2rem;
      font-weight: 600;
    }

</style>