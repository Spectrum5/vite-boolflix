<script>
import { store } from '../store';
import axios from 'axios';
import AppLogo from './another-comp/AppLogo.vue';
import SearchBar from './another-comp/SearchBar.vue';
export default {
    name: 'AppHeader',
    data() {
        return {
            store,
        }
    },
    components: {
        SearchBar,
        AppLogo,
    },
    methods: {
        // aggiunge metodo per la ricerca filtrata dei film
        filtering() {
            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: 'a40df00af579e7e6ad5cfe0c0085d2a1',
                    query: this.store.title,
                }
            })
                .then((response) => {
                    this.store.listFilm = response.data.results;
                }),
                axios.get('https://api.themoviedb.org/3/search/tv', {
                    params: {
                        api_key: 'a40df00af579e7e6ad5cfe0c0085d2a1',
                        query: this.store.title,
                    }
                })
                    .then((response) => {
                        this.store.listTv = response.data.results
                    })
            this.store.fullList = this.store.listFilm.concat(this.store.listTv);
        },
    },
    created() {
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=a40df00af579e7e6ad5cfe0c0085d2a1')
            .then((response) => {
                this.store.trendFilmList = response.data.results;
            });
        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=a40df00af579e7e6ad5cfe0c0085d2a1&language=en-US&page=1')
            .then((response) => {
                this.store.bestTvSeries = response.data.results;
            })
    },
}
</script>

<template>
    <!-- creazione template html -->
    <header>
        <section class="first-section-header p-3">
            <div class="d-flex justify-content-between align-item-center">
                <AppLogo />
                <SearchBar @filter="filtering" />
            </div>
        </section>
    </header>
</template>

<style lang="scss" scoped>
/* aggiunta stile css */

.first-section-header {
    background-color: black;
}
</style>