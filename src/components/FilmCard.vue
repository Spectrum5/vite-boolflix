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
    <!-- card  -->
    <div class="card" v-for="film in store.listFilm">
        <img class="poster" :src="`http://image.tmdb.org/t/p/w500/${film.poster_path}`" alt="">

        <div class="text-box"></div>
        <h2>{{ film.title }}{{ film.name }}</h2>
        <p>{{ film.original_title }}{{ film.original_name }}</p>

        <!-- Bandiera per la lingua-->
        <div v-if="film.original_language === 'it'">
            <img class="flag" src="../assets/italy.png" alt="">
        </div>
        <div v-else-if="film.original_language === 'en'">
            <img class="flag" src="../assets/unking.png" alt="">
        </div>

        <!-- Stelle per il voto-->
        <div>
            <font-awesome-icon icon="fa-solid fa-star" v-for=" index in 5"
                :class="startsCalcolate(film.vote_average) > index ? 'gold' : 'gray'" />
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
.card {
    width: calc(100% / 6 - 2px);
    margin: 1px;
    background-color: rgb(44, 44, 44);
    position: relative;

    .poster {
        object-fit: cover;
    }

    .text-box {
        position: absolute;
        content: '';
        bottom: 0%;
        left: 0%;
        width: 100%;
        height: 160px;
        text-align: center;

        h2 {
            height: 70px;
        }

        p {
            height: 40px;
        }

        .flag {
            width: 30px;
        }

        .stars {
            height: 20px;
            display: none;
        }
    }

    .card:hover .stars {
        display: block;
    }

    .flag {
        width: 50px;
    }

    .gray {
        color: #ededed;
    }

    .gold {
        color: gold;
    }
}
</style>