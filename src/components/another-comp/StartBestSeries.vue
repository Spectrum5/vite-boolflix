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
                <div class="item">
                    <img :src="`http://image.tmdb.org/t/p/w500/${seriesList[0]?.poster_path}`" alt="">
                </div>
                <div class="item">
                    <img :src="`http://image.tmdb.org/t/p/w500/${seriesList[1]?.poster_path}`" alt="">
                </div>
                <div class="item">
                    <img :src="`http://image.tmdb.org/t/p/w500/${seriesList[2]?.poster_path}`" alt="">
                </div>
                <div class="item">
                    <img :src="`http://image.tmdb.org/t/p/w500/${seriesList[3]?.poster_path}`" alt="">
                </div>
                <div class="item">
                    <img :src="`http://image.tmdb.org/t/p/w500/${seriesList[4]?.poster_path}`" alt="">
                </div>
                <a href="#section5" class="arrow__btn">›</a>
            </section>
            <section id="section5">
                <a href="#section1" class="arrow__btn">‹</a>
                <div class="item">
                    <img :src="`http://image.tmdb.org/t/p/w500/${seriesList[5]?.poster_path}`" alt="">
                </div>
                <div class="item">
                    <img :src="`http://image.tmdb.org/t/p/w500/${seriesList[6]?.poster_path}`" alt="">
                </div>
                <div class="item">
                    <img :src="`http://image.tmdb.org/t/p/w500/${seriesList[7]?.poster_path}`" alt="">
                </div>
                <div class="item">
                    <img :src="`http://image.tmdb.org/t/p/w500/${seriesList[8]?.poster_path}`" alt="">
                </div>
                <div class="item">
                    <img :src="`http://image.tmdb.org/t/p/w500/${seriesList[9]?.poster_path}`" alt="">
                </div>
                <a href="#section6" class="arrow__btn">›</a>
            </section>
            <section id="section6">
                <a href="#section4" class="arrow__btn">‹</a>
                <div class="item">
                    <img :src="`http://image.tmdb.org/t/p/w500/${seriesList[10]?.poster_path}`" alt="">
                </div>
                <div class="item">
                    <img :src="`http://image.tmdb.org/t/p/w500/${seriesList[11]?.poster_path}`" alt="">
                </div>
                <div class="item">
                    <img :src="`http://image.tmdb.org/t/p/w500/${seriesList[12]?.poster_path}`" alt="">
                </div>
                <div class="item">
                    <img :src="`http://image.tmdb.org/t/p/w500/${seriesList[13]?.poster_path}`" alt="">
                </div>
                <div class="item">
                    <img :src="`http://image.tmdb.org/t/p/w500/${seriesList[14]?.poster_path}`" alt="">
                </div>
                <a href="#section4" class="arrow__btn">›</a>
            </section>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@import '../../styles/file-scss/slider.scss';
</style>