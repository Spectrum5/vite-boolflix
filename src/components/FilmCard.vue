<script>
import { store } from '../store';
export default {
    name: 'FilmCard',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div v-for="film in store.listFilm">
        <img :src="`http://image.tmdb.org/t/p/w500/${film.poster_path}`" alt="">
        <h3>{{ film.title }}</h3>
        <p>{{ film.original_title }}</p>

        <!-- Bandiera per la lingua dei film-->
        <div v-if="film.original_language === 'it'">
            <img src="../assets/italy.png" alt="">
        </div>
        <div v-else-if="film.original_language === 'en'">
            <img src="../assets/unking.png" alt="">
        </div>

        <p>{{ film.vote_average }}</p>
    </div>
    <div v-for="tv in store.listTv">
        <img :src="`http://image.tmdb.org/t/p/w500/${tv.poster_path}`" alt="">
        <h3>{{ tv.name }}</h3>
        <p>{{ tv.original_name }}</p>

        <!-- Bandiera per la lingua delle serie TV -->
        <div v-if="tv.original_language === 'it'">
            <img src="../assets/italy.png" alt="">
        </div>
        <div v-else-if="tv.original_language === 'en'">
            <img src="../assets/unking.png" alt="">
        </div>

        <p>{{ tv.vote_average }}</p>
    </div>
</template>

<style lang="scss" scoped>

</style>