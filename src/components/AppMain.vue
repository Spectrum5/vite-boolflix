<script>
import { store } from '../store';
import FilmCard from '../components/another-comp/FilmCard.vue';
import StartTrendFilm from './another-comp/StartTrendFilm.vue';
import StartBestSeries from './another-comp/StartBestSeries.vue';

export default {
    name: 'AppMain',
    data() {
        return {
            store,
        }
    },
    components: {
        FilmCard,
        StartTrendFilm,
        StartBestSeries,
    },
}
</script>

<template>
    <main>
        <section class="first-section-main text-white">
            <div class="information" v-if="store.active === true">
                <h2>Hai trovato {{ store.fullList.length }} trasmissioni ( {{ store.listTv.length }} sono serie TV )
                </h2>
            </div>
            <div>
                <StartTrendFilm :trendList="store.trendFilmList" />
            </div>
            <div>
                <StartBestSeries :seriesList="store.bestTvSeries" />
            </div>
            <div class="film-list d-flex flex-wrap">
                <FilmCard />
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
.first-section-main {
    background-color: black;
}

.film-list {
    margin: calc(100% - 70px);
    margin: 35px;
}
</style>