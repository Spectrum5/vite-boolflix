<template>
    <div>
        <form action="" @submit.prevent="$emit('filter')">
            <input type="text" v-model="store.title">
            <button > Cerca</button>
        </form>
    </div>
</template>

<script>
import {store} from '../../store';
    export default {
        name:'SearchBar',
        data(){
            return{
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>