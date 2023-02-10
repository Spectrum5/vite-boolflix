<script>
import { store } from '../../store';
export default {
    name: 'startTrendFilm',

    data() {
        return {
            store,
        }
    },
    props: {
        trendList: Object,
    }
}
</script>

<template>
    <div v-if="store.active == false">
        <h2>Film piu' visti nell'ultimo periodo</h2>
        <div class="wrapper">
            <section id="section1">
                <a href="#section3" class="arrow__btn">‹</a>
                <div class="item" v-for="index in 5">
                    <img :src="`http://image.tmdb.org/t/p/w500/${trendList[index].poster_path}`" alt="">
                </div>
                <a href="#section2" class="arrow__btn">›</a>
            </section>
            <section id="section2">
                <a href="#section1" class="arrow__btn">‹</a>
                <div class="item" v-for=" index in 5">
                    <img :src="`http://image.tmdb.org/t/p/w500/${trendList[index + 5].poster_path}`" alt="">
                </div>
                <a href="#section3" class="arrow__btn">›</a>
            </section>
            <section id="section3">
                <a href="#section2" class="arrow__btn">‹</a>
                <div class="item" v-for=" index in 5">
                    <img :src="`http://image.tmdb.org/t/p/w500/${trendList[index + 10].poster_path}`" alt="">
                </div>
                <a href="#section1" class="arrow__btn">›</a>
            </section>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@import '../../styles/file-scss/slider.scss';
</style>