<script>
import { store } from '../../store';

export default {
    name: 'startBestSeries',

    data() {
        return {
            store,
        }
    },
    props: {
        seriesList: Object,
    }
}
</script>

<template>
    <div v-if="store.active == false">
        <h2>Serie tv uscite di recente</h2>
        <div class="wrapper">

            <section id="section4">
                <a href="#section6" class="arrow__btn">‹</a>

                <div class="item" v-for="index in 5">
                    <img :src="`http://image.tmdb.org/t/p/w500/${seriesList[index]?.poster_path}`" alt="">
                </div>

                <a href="#section5" class="arrow__btn">›</a>
            </section>

            <section id="section5">
                <a href="#section1" class="arrow__btn">‹</a>

                <div class="item" v-for="index in 5">
                    <img :src="`http://image.tmdb.org/t/p/w500/${seriesList[index + 5]?.poster_path}`" alt="">
                </div>

                <a href="#section6" class="arrow__btn">›</a>
            </section>

            <section id="section6">
                <a href="#section4" class="arrow__btn">‹</a>

                <div class="item" v-for="index in 5">
                    <img :src="`http://image.tmdb.org/t/p/w500/${seriesList[index + 10]?.poster_path}`" alt="">
                </div>

                <a href="#section4" class="arrow__btn">›</a>
            </section>

        </div>
    </div>

</template>

<style lang="scss" scoped>
@import '../../styles/file-scss/slider.scss';
</style>