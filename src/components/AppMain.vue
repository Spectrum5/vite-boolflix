<script>
import FilmCard from './FilmCard.vue';
export default {
    name: 'AppMain',
    components: {
        FilmCard,
    }
}
</script>

<template>
    <main>
        <section class="first-section-main text-white">
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