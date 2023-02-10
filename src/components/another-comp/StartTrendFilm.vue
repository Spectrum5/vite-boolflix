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
                <div class="item">
                    <img :src="`http://image.tmdb.org/t/p/w500/${trendList[0]?.poster_path}`" alt="">
                </div>
                <div class="item">
                    <img :src="`http://image.tmdb.org/t/p/w500/${trendList[1]?.poster_path}`" alt="">
                </div>
                <div class="item">
                    <img :src="`http://image.tmdb.org/t/p/w500/${trendList[2]?.poster_path}`" alt="">
                </div>
                <div class="item">
                    <img :src="`http://image.tmdb.org/t/p/w500/${trendList[3]?.poster_path}`" alt="">
                </div>
                <div class="item">
                    <img :src="`http://image.tmdb.org/t/p/w500/${trendList[4]?.poster_path}`" alt="">
                </div>
                <a href="#section2" class="arrow__btn">›</a>
            </section>
            <section id="section2">
                <a href="#section1" class="arrow__btn">‹</a>
                <div class="item">
                    <img :src="`http://image.tmdb.org/t/p/w500/${trendList[5]?.poster_path}`" alt="">
                </div>
                <div class="item">
                    <img :src="`http://image.tmdb.org/t/p/w500/${trendList[6]?.poster_path}`" alt="">
                </div>
                <div class="item">
                    <img :src="`http://image.tmdb.org/t/p/w500/${trendList[7]?.poster_path}`" alt="">
                </div>
                <div class="item">
                    <img :src="`http://image.tmdb.org/t/p/w500/${trendList[8]?.poster_path}`" alt="">
                </div>
                <div class="item">
                    <img :src="`http://image.tmdb.org/t/p/w500/${trendList[9]?.poster_path}`" alt="">
                </div>
                <a href="#section3" class="arrow__btn">›</a>
            </section>
            <section id="section3">
                <a href="#section2" class="arrow__btn">‹</a>
                <div class="item">
                    <img :src="`http://image.tmdb.org/t/p/w500/${trendList[10]?.poster_path}`" alt="">
                </div>
                <div class="item">
                    <img :src="`http://image.tmdb.org/t/p/w500/${trendList[11]?.poster_path}`" alt="">
                </div>
                <div class="item">
                    <img :src="`http://image.tmdb.org/t/p/w500/${trendList[12]?.poster_path}`" alt="">
                </div>
                <div class="item">
                    <img :src="`http://image.tmdb.org/t/p/w500/${trendList[13]?.poster_path}`" alt="">
                </div>
                <div class="item">
                    <img :src="`http://image.tmdb.org/t/p/w500/${trendList[14]?.poster_path}`" alt="">
                </div>
                <a href="#section1" class="arrow__btn">›</a>
            </section>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@import '../../styles/file-scss/slider.scss';
</style>