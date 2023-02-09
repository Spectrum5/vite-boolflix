<script>
import { store } from '../store';
export default {
    name: 'FilmCard',
    data() {
        return {
            store,
        }
    },
    methods: {
        startsCalcolate(vote) {
            return Math.floor(vote / 2);
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
            <img class="flag" src="../assets/italy.png" alt="">
        </div>
        <div v-else-if="film.original_language === 'en'">
            <img class="flag" src="../assets/unking.png" alt="">
        </div>

        <!-- Stelle per il voto del film -->
        <div>
            <font-awesome-icon icon="fa-solid fa-star" v-for=" index in 5"
                :class="startsCalcolate(film.vote_average) > index ? 'gold' : 'gray'" />
        </div>
    </div>
    <div v-for="tv in store.listTv">
        <img :src="`http://image.tmdb.org/t/p/w500/${tv.poster_path}`" alt="">
        <h3>{{ tv.name }}</h3>
        <p>{{ tv.original_name }}</p>

        <!-- Bandiera per la lingua delle serie TV -->
        <div v-if="tv.original_language === 'it'">
            <img class="flag" src="../assets/italy.png" alt="">
        </div>
        <div v-else-if="tv.original_language === 'en'">
            <img class="flag" src="../assets/unking.png" alt="">
        </div>

        <!-- Stelle per il voto del serie tv -->
        <div>
            <font-awesome-icon icon="fa-solid fa-star" v-for=" index in 5"
                :class="startsCalcolate(tv.vote_average) > index ? 'gold' : 'gray'" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.flag {
    width: 50px;
}

.gray {
    color: #ededed;
}

.gold {
    color: gold;
}
</style>