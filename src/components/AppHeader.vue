<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
        }
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
                        console.log(this.store.listTv)
                    })
        },
    },
}
</script>

<template>
    <!-- creazione template html -->
    <div>
        <form action="" @submit.prevent="filtering">
            <input type="text" v-model="store.title">
            <button>Cerca</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
/* aggiunta stile css */
</style>