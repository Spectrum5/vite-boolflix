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
$itemGrow: 1.2;
$duration: 250ms;

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    background-color: #000;
}

h1 {
    font-family: Arial;
    color: red;
    text-align: center;
}

.wrapper {
    display: grid;
    grid-template-columns: repeat(3, 100%);
    overflow: hidden;
    scroll-behavior: smooth;

    section {
        width: 100%;
        position: relative;
        display: grid;
        grid-template-columns: repeat(5, auto);
        margin: 20px 0;

        .item {
            padding: 0 2px;
            transition: $duration all;

            &:hover {
                margin: 0 40px;
                transform: scale(1.2);
            }

        }

        a {
            position: absolute;
            color: #fff;
            text-decoration: none;
            font-size: 6em;
            background: rgb(0, 0, 0);
            width: 80px;
            padding: 20px;
            text-align: center;
            z-index: 1;

            &:nth-of-type(1) {
                top: 200px;
                left: 0;
                background: linear-gradient(-90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
            }

            &:nth-of-type(2) {
                top: 200px;
                right: 0;
                background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
            }

        }

    }
}
</style>