<script>
import { store } from '../store';
import FilmCard from './FilmCard.vue';

export default {
    name: 'AppMain',
    data() {
        return {
            store,
        }
    },
    components: {
        FilmCard,
    },
    computed: {
        itemSearched() {
            let fullList = this.store.listFilm.concat(this.store.listTv)
            return fullList.length;
        }
    }
}
</script>

<template>
    <main>
        <section class="first-section-main text-white">
            <div class="p-2">
                <h2>Hai trovato {{ itemSearched }} trasmissioni ( {{ store.listTv.length }} sono serie TV )</h2>
            </div>
            <div class="d-flex flex-wrap">
                <FilmCard />
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
.first-section-main {
    background-color: black;
}
</style>