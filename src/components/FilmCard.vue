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
        <h3>{{ film.title }}</h3>
        <p>{{ film.original_title }}</p>
        <p>{{ film.original_language }}</p>
        <p>{{ film.vote_average }}</p>
    </div>
</template>

<style lang="scss" scoped>

</style>